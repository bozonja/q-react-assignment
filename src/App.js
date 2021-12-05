//components
import Posts from "./components/Posts/Posts";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
//styles
import "./App.css";

function App() {
  const helloMessage = "Hello from ";

  return (
    <section className="wrapper">
      <Header helloMessage={helloMessage} />
      <Posts helloMessage={helloMessage} />
      <Footer helloMessage={helloMessage} />
    </section>
  );
}

export default App;
