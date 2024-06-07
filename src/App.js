import { Particles } from "react-particles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          // customize your particles options here
        }}
      />
    </div>
  );
}

export default App;
