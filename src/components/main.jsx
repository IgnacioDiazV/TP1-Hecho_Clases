const Main = ({ nombre, persona, persona2, grupo }) => {
  const mitad = Math.ceil(grupo.length / 2);
  const grupo1 = grupo.slice(0, mitad);
  const grupo2 = grupo.slice(mitad);

  return (
    <div className="main-container">
      <h2 className="main-title">Componente Main</h2>
      <p>Nombre recibido: {nombre}</p>

      <h3 style={{ textAlign: "center" }}>Personas:</h3>
      <div className="personas-grid">
        <div>
          <h4>Persona 1:</h4>
          <ul>
            <li>Nombre: {persona.nombre}</li>
            <li>Edad: {persona.edad}</li>
            <li>Curso: {persona.curso}</li>
            <li>Asistencia: {persona.Asistencia ? "Presente" : "Ausente"}</li>
          </ul>
        </div>
        <div>
          <h4>Persona 2:</h4>
          <ul>
            <li>Nombre: {persona2.nombre}</li>
            <li>Edad: {persona2.edad}</li>
            <li>Curso: {persona2.curso}</li>
            <li>Asistencia: {persona2.Asistencia ? "Presente" : "Ausente"}</li>
          </ul>
        </div>
      </div>

      <h3>Grupo:</h3>
      <div className="grupo-grid">
        <ul>
          {grupo1.map((integrante, index) => (
            <li key={index}>
              {integrante.nombre} - {integrante.edad} años
            </li>
          ))}
        </ul>
        <ul>
          {grupo2.map((integrante, index) => (
            <li key={index}>
              {integrante.nombre} - {integrante.edad} años
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
