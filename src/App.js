import './App.css';
import Heder from './componentes/heder/heder.js';
import Pesquisa from './componentes/pesquisa/pesquisa.js';
import Lista from './componentes/lista/lista.js';

function App() {
  return (
    <div className="App">
      <Heder/>
      <Pesquisa/>
      <Lista/>
    </div>
  );
}

export default App;
