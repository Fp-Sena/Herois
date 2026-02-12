import './cards.css';
import CoracaoVazil from '../../../assets/icones/heart/Path Copy 2@1,5x.svg';
import CoracaoCheio from '../../../assets/icones/heart/Path Copy 7@1,5x.png';
import React, { useState } from 'react';

function Cards({nome, imagem}) {
  const [favorito, setFavorito] = useState(false);
  var src = favorito ? CoracaoCheio : CoracaoVazil;

  return (
    <div className="Cards">
      <div class="heroi">
        <img src={`../../../assets/${imagem}`} id="homemDeFerro"/>
        <div>{nome}</div>
        <img src={src} alt="Coração vazil" onClick={()=>setFavorito(!favorito)}/>  
      </div>
    </div>
  );
}

export default Cards;
