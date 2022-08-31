import React from "react";
//import "src/styles/NovedadesPage.css"; estas dos lineas están comentadas para que levante el front. cuando lo descomento no lo levanta y debería levantarlo
//import NovedadItem from 'src/novedades/NovedadItem.js';
import { useState, useEffect } from "react";
import axios from 'axios';

const NovedadItem = (props) => {

    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
            console.log(novedades);
        };

        cargarNovedades();

    }, []);

    return (
        <div className="noticias">
            <div className="info">
                <h2>Novedades en zonas de trekking</h2>
            </div>
            <div className="novedades">
                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} body={item.cuerpo} image={item.imagen} />)
                )
                }
            </div>
        </div>
    );
}
export default NovedadItem;










