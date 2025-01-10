import { useUserStore } from '../../components/stores/useUserStore';
import axios from 'axios';

function Overlay({ examen, onClose }) {
    
    const user = useUserStore((state) => state.user);

    const updateExamenStatus = async (id, status) => {

        onUpdateStatus(id, status);

        try {
            const payload = {
                id_materie: examen.id_materie,
                id_profesor: examen.id_profesor,
                id_student_creator: examen.id_student_creator,
                id_grupa: examen.id_grupa,
                data_examen: new Date(examen.data_examen).toISOString(),
                locatie: examen.locatie,
                tip_examen: examen.tip_examen,
                observatii: examen.observatii,
                status: status,
            };
    
            const response = await axios.put(`${import.meta.env.VITE_API_KEY}/programari_examen/${id}`, payload);
    
            console.log("Examen actualizat:", response.data);
    
            
            onClose(); 
        } catch (error) {
            console.error("Eroare la actualizarea examenului:", error);
    
            alert("A apărut o eroare. Te rugăm să încerci din nou.");
        }
    };
    
    
    

    if (!examen) return null;

    return (
        <div className="overlay">
            <div className="overlay-content">
                <button className="close-btn" onClick={onClose}>Închide</button>
                <h2>Detalii Examen</h2>
                <p><strong>Materie:</strong> {examen.id_materie}</p>
                <p><strong>Profesor:</strong> {examen.id_profesor}</p>
                <p><strong>Locație:</strong> {examen.locatie}</p>
                {/* <p><strong>Data:</strong> {format(new Date(examen.data_examen), 'dd.MM.yyyy HH:mm')}</p> */}
                <p><strong>Tip Examen:</strong> {examen.tip_examen}</p>
                <p><strong>Observații:</strong> {examen.observatii}</p>
                <p><strong>Status:</strong> {examen.status}</p>
            </div>
           
            
            <div className="buttons-wrapper">
                <button onClick={() => updateExamenStatus(examen.id, "aceptat")}>Acceptă</button>
                <button onClick={() => updateExamenStatus(examen.id, "refuzat")}>Refuză</button>
            </div>
        

        </div>
    );
}
export default Overlay;