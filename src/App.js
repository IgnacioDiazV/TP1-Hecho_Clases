// Nombre: Díaz Valdez, Ignacio - Legajo: 61551
import HomePages from "./pages/HomePages";

function App() {
  const nombre = "Pablo";
  const persona = {
    nombre: "Carlos",
    edad: 20,
    curso: "programación",
    Asistencia: false,
  };
  const persona2 = {
    nombre: "Ignacio",
    edad: 22,
    curso: "programación",
    Asistencia: true,
  };
  const grupo = [
    { nombre: "Lucas", edad: 25 },
    { nombre: "Luciana", edad: 19 },
    { nombre: "Julieta", edad: 26 },
    { nombre: "Jorge", edad: 30 },
    { nombre: "Cristian", edad: 30 },
  ];

  return (
    <div className="App">
      <HomePages
        nombre={nombre}
        persona={persona}
        persona2={persona2}
        grupo={grupo}
      />
    </div>
  );
}

export default App;
