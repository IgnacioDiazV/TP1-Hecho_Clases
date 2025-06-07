// Nombre: Díaz Valdez, Ignacio - Legajo: 61551
import Home from "../components/home.jsx";
import style from "../App.css";

const HomePages = (props) => {
  
  return (
    <div>
      <h1>Página Principal</h1>
      <Home {...props} />
    </div>
  );
  
};

export default HomePages;