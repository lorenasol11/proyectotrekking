import { prettyDOM } from "@testing-library/react";

const PreguntasFrecuentesPage = (props) => {
    return (
        <main className="holder">
        <div className="preguntas">
            <h3>Preguntas frecuentes</h3>
            <div className="pregunta">
                <h4>¿Qué calzado debo llevar?</h4>
                <h5>En verano</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim officiis soluta eos porro
                    laudantium aliquid optio eum iste fugit, voluptates culpa provident quam quia. Dignissimos, dicta.
                    Commodi, quo delectus!</p>
                <h5>En invierno</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque possimus autem officiis at
                    cupiditate nisi quos temporibus, id suscipit exercitationem corrupti officia maiores quas
                    necessitatibus mollitia magnam in incidunt!</p>
            </div>

            <div className="pregunta">
                <h4>¿Cuál es el mínimo de edad recomendado?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim officiis soluta eos porro
                    laudantium aliquid optio eum iste fugit, voluptates culpa provident quam quia. Dignissimos, dicta.
                    Commodi, quo delectus!</p>
            </div>

            <div className="pregunta">
                <h4>¿Cuáles son los horarios permitidos para circular?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim officiis soluta eos porro
                    laudantium aliquid optio eum iste fugit, voluptates culpa provident quam quia. Dignissimos, dicta.
                    Commodi, quo delectus!</p>
            </div>

            <div className="pregunta">
                <h4>¿Qué elementos son obligatorios para acceder al sendero?</h4>
                <h5>En verano</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum enim officiis soluta eos porro
                    laudantium aliquid optio eum iste fugit, voluptates culpa provident quam quia. Dignissimos, dicta.
                    Commodi, quo delectus!</p>
                <h5>En invierno</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque possimus autem officiis at
                    cupiditate nisi quos temporibus, id suscipit exercitationem corrupti officia maiores quas
                    necessitatibus mollitia magnam in incidunt!</p>
            </div>
        </div>
    </main>
    );
}
export default PreguntasFrecuentesPage;