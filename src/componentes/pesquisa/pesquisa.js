import './pesquisa.css';
import lupa from '../../assets/busca/Lupa/Shape.png';

function Pesquisa() {
  return (
    <div className="pesquisa">
      <div id="conteinerPesquisa">
        <div id='inputGeral'>
          <img src={lupa} alt="Lupa de Pesquisa"/>
          <input type="text" placeholder="Procure por heróis" id='input'/>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;
