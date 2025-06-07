import Main from "./main";

const Home = (props) => {
  const { nombre, persona, grupo } = props;

  return (
    <div>
      <h2>Componente Home</h2>
      <Main nombre={nombre} persona={persona} grupo={grupo} />
    </div>
  );
};

export default Home;
