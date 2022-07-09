import './../styles/ContactoPage.css'

const ContactoPage = (props) => {
    return (
            <main className="holder contacto">
                <div>
                    <h2>Contacto Rápido</h2>
                    <form action=" " method="" class="formulario">
                        <p>
                            <label for="nombre">Nombre</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="email">Email</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="telefono">Telefono</label>
                            <input type="text" name="" />
                        </p>
                        <p>
                            <label for="mensaje">Mensaje</label>
                            <textarea name=""></textarea>
                        </p>
                        <p>
                            <input type="submit" value="Enviar" />
                        </p>
                    </form>
                </div>
                <div className="datos">
                    <h2>Redes</h2>
                    <li>Email: contacto@trekkingar.com</li>
                    <li>Facebook: trekkingar</li>
                    <li>Twitter: trekkingar</li>
                    <li>Instagram: trekkingar</li>



                </div>
            </main>
        

    );
}
export default ContactoPage;