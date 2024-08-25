import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <div className="container flex flex-wrap min-w-screen min-h-screen">
        <Card
          UserPhoto="src\assets\pic.jpg"
          name="Marco Cubedo"
          quote="&#34;Part of my time developing in Reat has been just fun and rediscover
        ways to make UI more aatractive, love the way React Creates Apps for
        everyone&#34;"
          dev="React Dev"
          country="Mexico"
        />
        <Card
          UserPhoto="src\assets\pic2.jpg"
          name="Ray Charles"
          quote="&#34;I don't know how, but alway end in every dev project, and
          i can say nothing about it&#34;"
          dev="project avatar"
          country="London"
        />
        <Card
          UserPhoto="src\assets\pic4.jpg"
          name="Attack Titan"
          quote="&#34;Just take to Marley and i will recover the power of the hammer titan,
          trust me and fear not, i will defeat our enemyes with the power of the atack titan and the founder titan  &#34;"
          dev="Titan"
          country="Paradis"
        />
      </div>
    </>
  );
}

export default App;
