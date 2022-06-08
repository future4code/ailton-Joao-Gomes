import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import eu from './imagens/eu.png'
import email from './imagens/icons8-email-open-50.png';
import endereco from './imagens/icons8-address-60.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {eu}
          nome="João Pedro Zang Gomes" 
          descricao="Oi, eu sou o João. Me considero um estudante extremamente curioso, no momento estou focando em programação, principalmente na linguagem Java Script. Me apaixonei por T.I durante minha graduação em engenharia de minas, onde tive uma leve apresentação da área, após isso, decidi que quero seguir por este caminho."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className ="page-section-container">
      <CardPequeno
        imagem= {email}
        categoria= "Email:"
        descricao= "joaozanggomes@gmail.com"
      />
      <CardPequeno
        imagem= {endereco}
        categoria= "Endereço:"
        descricao= "Porto Alegre - RS"
      />
      </div>     

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
