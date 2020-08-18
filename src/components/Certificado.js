import React from 'react';
import './Certificado.css';
import RedLine from '../assets/vetores/linha-red.png';
import WhiteLine from '../assets/vetores/linha-white.png';
import Book from '../assets/images/certificado.png';

function Certificado() {
  return (
    <section className="Certificado" id="Certificado">
      <div className="container">
        <div className="certificado-wrapper">
          <div className="certificado-img">
            <img className="book" src={Book} alt=""/>
            <img 
              className="red-line display-none-700" 
              src={RedLine} 
              alt="linha vermelha"
            />
            <img 
              className="white-line display-none-700" 
              src={WhiteLine} 
              alt="linha vermelha"
            />
          </div>
          <div className="certificado-text">
            <img 
              className="white-line display-none-700" 
              src={WhiteLine} 
              alt="linha branca"
            />
            <h2>
              Certificação de uma das maiores escolas de negócios do Brasil e ligadas a Microsoft School: o Centro Europeu
            </h2>
            {/* <p className="certi-title">
              Centro Europeu é uma das referências nacionais 
              <br/>
              em educação e negócios. 
            </p> */}
            <p className="certi-subtitle">
              + de 50 cursos online e presenciais 
              <br/>
              + de 25.000 alunos ao longo de sua trajetória 
            </p>
            <img 
              className="red-line" 
              src={RedLine} 
              alt="linha vermelha"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificado;