import './cards.css';
import HomemDeFerro from '../../../assets/059eb7f9eda5c604728c7b09caba9304.jpg';

function Cards() {
  return (
    <div className="Cards">
      <h1>cards</h1>
      <div class="heroi">
        <img src={HomemDeFerro} alt="Homem de ferro" id="homemDeFerro"/>
        <p/>Homem de Ferro
        <img src="assets/icones/heart/Path Copy 2 png" alt="Coração vazil"/>  
      </div>
    </div>
  );
}

export default Cards;
