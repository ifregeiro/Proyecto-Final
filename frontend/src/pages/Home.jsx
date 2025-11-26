import { Link } from "react-router-dom";
import './style_productos.css'
import "./Home.css";

const Home = () => {
  return (

    <section className="categorias">   {/* DESPLEGABLE CATEGORIAS */}
      <details>
          <summary className="cat peluches_destacados">✨Peluches destacados✨</summary>
          <div className="contenido">

              <article className="peluche-card">
                  <img src="img_index/tortuga_daisy_cat.jpg" alt="Tortuga Daisy" />
                  <h3>Tortuga Daisy</h3>
                  <p className="precio">$16.000</p>

                  <Link to="#">
                    <a className="ver-detalle">Ver más</a>
                  </Link>
              </article>

              <article className="peluche-card">
                  <img src="img_index/vaca_josefina_cat.jpg" alt="Vaca Josefina" />
                  <h3>Vaca Josefina</h3>
                  <p className="precio">$23.000</p>

                  <Link to="#">
                    <a className="ver-detalle">Ver más</a>
                  </Link>
              </article>

              <article className="peluche-card">
                  <img src="img_index/serpiente_confeti_cat.jpg" alt="Serpiente Confeti" />
                  <h3>Serpiente Confeti</h3>
                  <p className="precio">$7.800</p>

                  <Link to="#">
                    <a className="ver-detalle">Ver más</a>
                  </Link>
              </article>

              <article className="peluche-card">
                  <img src="img_index/serpiente_confeti_cat.jpg" alt="Serpiente Confeti" />
                  <h3>Serpiente Confeti</h3>
                  <p className="precio">$7.800</p>

                  <Link to="#">
                    <a className="ver-detalle">Ver más</a>
                  </Link>
              </article>
          </div>
      </details>

      <details>
          <summary className="cat patrones_destacados">✨Patrones destacados✨</summary>
          <div className="contenido">
              
          </div>
      </details>
    </section>

  );
};

export default Home;
