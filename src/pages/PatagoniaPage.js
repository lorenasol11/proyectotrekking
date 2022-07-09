const PatagoniaPage = (props) => {
    return (

        <main className="holder">
            <div className="region">
                <h2>Región Patagónica</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veniam repellat, autem consequuntur
                    exercitationem itaque, modi sint eos dolores unde labore adipisci laborum minus dolor, aut minima
                    maiores? Similique, nulla?</p>
            </div>

            <div className="circuitos">
                <h2>Circuitos</h2>

                <div className="circuito">
                    <img src="img/cerrohieloazulpatagonia.jpg" alt="Cerro Hielo Azul"/>
                        <div className="info">
                            <h5>Cerro Hielo Azul</h5>
                            <h6>Dificultad alta</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quia neque quo, eius fugiat
                                commodi
                                autem a mollitia ipsam culpa amet quaerat, reiciendis sit excepturi beatae architecto
                                praesentium
                                odio. Amet.</p>
                        </div>
                </div>


                <div className="circuito">
                    <img src="img/volcanlaninpatagonia.jpg" alt="Volcan Lanin"/>
                        <div className="info">
                            <h5>Volcán Lanín</h5>
                            <h6>Dificultad media</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae ratione voluptas beatae
                                ducimus nisi quas vel modi eum eaque similique laboriosam eveniet debitis iure soluta nulla
                                quos,
                                aliquid assumenda.</p>
                        </div>
                </div>

                <div className="circuito">
                    <img src="img/glaciarmartialpatagonia.jpg" alt="Glaciar Martial"/>
                        <div className="info">
                            <h5>Glaciar Martial</h5>
                            <h6>Dificultad baja</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae ratione voluptas beatae
                                ducimus nisi quas vel modi eum eaque similique laboriosam eveniet debitis iure soluta nulla
                                quos,
                                aliquid assumenda.</p>
                        </div>
                </div>
            </div>

        </main>
    );
}
export default PatagoniaPage;