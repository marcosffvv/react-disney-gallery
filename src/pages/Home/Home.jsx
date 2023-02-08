import "./Home.scss";
import mickey from "../../assets/mickey.png";

export default function HomePage(){

    return (
        <div className="home">
            <h1 className="home--title">Galería de Disney</h1>
            <p className="home--slogan">Donde encontrarás tu personaje Disney favorito...</p>
            <img className="home--img" src={mickey} alt='mickey mouse'></img>
            <h3>Bienvenido amigo!!!</h3>
        </div>
    )
}