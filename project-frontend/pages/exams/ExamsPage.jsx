import React, { useEffect, useState } from 'react';
import CurrentDate from "../../components/current-date/CurrentDate";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'; 
import LayoutTwoColumns from "../../components/layout-two-columns/LayoutTwoColumns";
import FullCalendar from '@fullcalendar/react';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import roLocale from '@fullcalendar/core/locales/ro';
import { useUserStore } from '../../components/stores/useUserStore';
import axios from 'axios';

export default function ExamsPage() {
    const initialView = "timeGridWeek"; 
    const user = useUserStore((state) => state.user);
    const [examene, setExamene] = useState([]);

    useEffect(() => {
        const fetchExamene = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_KEY}/programari_examen/filter/`, {
                    params: { id_professor: user.id },
                });

                const materiiResponse = await axios.get(`${import.meta.env.VITE_API_KEY}/materii/`);

                const exameneData = response.data;
                const materiiData = materiiResponse.data;

                const exameneCuDurata = exameneData.map((examen) => {
                    const materie = materiiData.find(m => m.id === examen.id_materie);
                    const durata = materie ? materie.durata_examen_minute : 0;
                    const startDate = new Date(examen.data_examen);
                    const endDate = new Date(startDate.getTime() + durata * 60000);

                    return {
                        title: materie ? materie.nume : "Examen necunoscut",
                        start: startDate.toISOString(),
                        end: endDate.toISOString(),
                        location: examen.locatie,
                        observations: examen.observatii,
                        extendedProps: {
                            status: examen.status,
                            profesor: user.name,
                        },
                    };
                });

                setExamene(exameneCuDurata);
            } catch (error) {
                console.error("Eroare la preluarea datelor:", error);
            }
        };

        fetchExamene();
    }, [user]);

    const formatTitle = (date) => {
        const startDate = format(date, 'MMMM dd', { locale: ro });
        const endDate = format(new Date(date.setDate(date.getDate() + 6)), 'dd, yyyy', { locale: ro });
        return `${startDate}-${endDate}`;
    };

    const renderEventContent = (eventInfo) => {
    const status = eventInfo.event.extendedProps.status;
    const statusText = status === "in_asteptare" ? status.replace("_", " ") : status;

    const startTime = format(new Date(eventInfo.event.start), 'HH:mm');
    const endTime = format(new Date(eventInfo.event.end), 'HH:mm');

    return (
        <div>
            <b>{eventInfo.event.title}</b>
            <p>{startTime} - {endTime}</p>
            <p>{eventInfo.event.extendedProps.profesor}</p>
            <p>{eventInfo.event.extendedProps.location}</p>
            <p className={`${status} status`}>
                {statusText}
            </p>
        </div>
    );
};


    return (
        <LayoutTwoColumns 
            leftColumn={<CurrentDate />} 
            rightColumn={
                <div className='big-calendar-wrapper'>
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]} 
                        initialView={initialView} 
                        locale={roLocale}
                        headerToolbar={{
                            start: "prev,next,title",
                            center: "",
                            end: "",
                        }}
                        editable={false}
                        selectable={false}
                        events={examene}
                        slotMinTime="08:00:00"
                        slotMaxTime="20:00:00"
                        eventContent={renderEventContent}
                        datesSet={(dateInfo) => {
                            const formattedTitle = formatTitle(dateInfo.start);
                            document.querySelector('.fc-toolbar-title').textContent = formattedTitle;
                        }}
                    />
                </div>
            }
        />
    );
}
