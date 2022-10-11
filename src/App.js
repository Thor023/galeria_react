import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header titulo="Galeria de imagenes con REACT" />
      <Cards src="/imgs/01.jpg" title="La Horda" descripcion="Faccion" />
      <Cards src="/imgs/02.jpg" title="La Alianza" descripcion="Faccion" />
      <Cards src="/imgs/03.jpg" title="Rey Varian" descripcion="Lider de la Alianza" />
      <Cards src="/imgs/04.jpg" title="Rey Lich" descripcion="Lider de la plaga" />
      <Cards src="/imgs/05.png" title="Uther the Lightbringer" descripcion="Paladin Lider de la mano de plata" />
      <Cards src="/imgs/06.jpg" title="Thrall" descripcion="Shaman y Jefe de guerra" />
      <Footer />
    </div>
  );
}

export default App;