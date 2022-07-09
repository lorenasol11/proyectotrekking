import { Link } from "react-router-dom";


const Nav = (props) => {
    return (
        <div><ul class="holder">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/patagonia">Patagonia</Link></li>
            <li><Link to="/cuyo">Region Cuyana</Link></li>
            <li><Link to="/norte">Norte</Link></li>
            <li><Link to="/preguntas">Preguntas Frecuentes</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
        </ul></div>
    );
}
export default Nav;
