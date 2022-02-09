import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import SectionHabilidades from './components/SectionHabilidades';
import SectionQuemSou from "./components/SectionQuemSou";
import SectionProjetos from "./components/SectionProjetos";
import SectionContato from "./components/SectionContato";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <SectionQuemSou/>
      <SectionHabilidades/>
      <SectionProjetos />
      <SectionContato />
      <Footer/>
    </div>
  );
}

export default App;
