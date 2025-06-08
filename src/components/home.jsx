import Main from "./main.jsx";

const Home = (props) => {
  const { nombre, persona, persona2, grupo } = props;

  return (
    <div className="home-container">
      <h2 className="main-title">Componente Home</h2>
      <Main nombre={nombre} persona={persona} persona2={persona2} grupo={grupo} />
    </div>
  );
};

export default Home;
