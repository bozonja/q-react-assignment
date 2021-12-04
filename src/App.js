//components
import Posts from "./components/Posts";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
//styles
import "./App.css";

function App() {
  return (
    <section className="wrapper">
      <Header />
      <Posts />
      <Footer />
    </section>
  );
}

export default App;
