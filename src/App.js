// Nombre: Díaz Valdez, Ignacio - Legajo: 61551
import HomePages from "./pages/HomePages";

function App() {
  // Datos a pasar
  let nombre = "Pablo";

  let persona = {
    nombre: 'Carlos',
    edad: 20,
    curso: 'programación',
    Asistencia: false
  };

  let grupo = [
    { nombre: 'Lucas', edad: 25 },
    { nombre: 'Luciana', edad: 19 },
    { nombre: 'Julieta', edad: 26 },
    { nombre: 'Jorge', edad: 30 },
    { nombre: 'Cristian', edad: 30 }
  ];

  return (
    <div className="App">
      {/* Pasa todo a HomePages */}
      <HomePages nombre={nombre} persona={persona} grupo={grupo} />
    </div>
  );
}

export default App;
