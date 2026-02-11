import './heder.css';
import logoMarvel from '../../assets/logo/Group.png';
function Heder() {
  return (
    <div className="heder">
      <div>
            <img src={logoMarvel} alt="Logo Da Marvel" id="logoPrincipal"/>
        </div>
        <b>EXPLORE O UNIVERSO</b>
        <p class="frasesClaras">Mergulhe no domínio deslumbrante de todos os personagens classicos que você ama - e aqueles que você descobrira em breve!</p>
    </div>
  );
}

export default Heder;
