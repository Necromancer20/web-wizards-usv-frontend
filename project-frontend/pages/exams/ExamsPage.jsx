import React from 'react';
import CurrentDate from "../../components/current-date/CurrentDate";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid'; 
import LayoutTwoColumns from "../../components/layout-two-columns/LayoutTwoColumns";
import FullCalendar from '@fullcalendar/react';
import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import roLocale from '@fullcalendar/core/locales/ro';


export default function ExamsPage() {

    const initialView = "timeGridWeek"; 

    const formatTitle = (date) => {
        const startDate = format(date, 'MMMM dd', { locale: ro });
        const endDate = format(new Date(date.setDate(date.getDate() + 6)), 'dd, yyyy', { locale: ro });
        return `${startDate}-${endDate}`;
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
                        events={[
                            { title: 'Eveniment 1', start: '2024-11-23T10:00:00', end: '2024-11-23T12:00:00' },
                            { title: 'Eveniment 2', start: '2024-11-23T14:00:00', end: '2024-11-23T16:00:00' },
                        ]}
                        slotMinTime="08:00:00"
                        slotMaxTime="20:00:00"
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
