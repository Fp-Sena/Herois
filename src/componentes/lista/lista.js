import './lista.css';
import Cards from './cards/cards.js';
import Herois from '../../API/ApiTeste.json';
import IconeHeroi from '../../assets/icones/heroi/noun_Superhero_2227044.png';
import IconeBotao from '../../assets/toggle/Group 6.png';
import CoracaoVazil from '../../assets/icones/heart/Path Copy 2@1,5x.svg';
import CoracaoCheio from '../../assets/icones/heart/Path Copy 7@1,5x.png';
import React, { useState } from 'react';

function Lista() {
  const [favorito, setFavorito] = useState(false);
  var src = favorito ? CoracaoCheio : CoracaoVazil;

  return (
    <div className="lista">
      <div id='cabecalio'>
        <h4>Encontrado 5 heróis</h4>
        <div id='textoVermelho'>
          <img src={IconeHeroi} alt='icone heroi' className='icones'/>
          <h4 className='textoVermelho'>Ordenar por nome - A/Z</h4>
          <img src={IconeBotao} alt='icone botao' className='icones'/>
          <img src={src} alt="Coração vazil" onClick={()=>setFavorito(!favorito)} className='icones'/>
          <h4 className='textoVermelho'>Somente favoritos</h4>
        </div>
      </div>

      <div id='conteinerCards'>
        {Herois.map((heroi) => {
          return (
            <div>
              <Cards
                nome={heroi.nome}
                imagem={heroi.image_path}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Lista;
