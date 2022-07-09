const HomePage = (props) => {
    return (
        
            <main className="holder">
        <div className="homeimg">
            <img src="img/inicio.jpg" alt="Trekking"/>
        </div>

        <div className="columnas">
            <div className="nosotros">
                <h2>Nosotros</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur veritatis laboriosam, illo quo adipisci ratione molestiae possimus ex saepe tenetur facere magni fugit quisquam perspiciatis beatae doloremque deleniti animi accusamus!</p>
            </div>

            <div className="opiniones">
                <h3>Opiniones</h3>
                <div className="opinion">
                    <span className="cita">Hermosos lugares</span>
                    <span className="autor">Luna Jazmín</span>
                </div>
            </div>
        </div>
    </main>




    );
}
export default HomePage;