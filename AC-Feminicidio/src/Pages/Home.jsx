import CarrosselComponente from '../components/Carrossel'
import NavProjeto from '../components/NavProjeto'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';

function Home() {
    return (
      <>
        <div>
          <NavProjeto/>
          <CarrosselComponente/>
          <img className='razoes' src={img1}/>
          <p> São Paulo possui o maior índice de feminicídio entre os municípios, devido a:</p>
            
          <p> População e densidade demográfica: São Paulo é o estado mais populoso do Brasil, com uma grande concentração de pessoas em áreas urbanas. Essa alta densidade populacional pode levar a conflitos, violência e crimes, incluindo o feminicídio.</p>

          <p> Desigualdade de gênero: A desigualdade de gênero persistente na sociedade brasileira é um fator importante para o aumento dos casos de feminicídio. Mulheres muitas vezes são vítimas de violência doméstica e outros abusos, que podem culminar em assassinatos.</p>

          <p> Cultura machista: O Brasil ainda enfrenta desafios relacionados à cultura machista arraigada, que muitas vezes desvaloriza as mulheres e legitima a violência de gênero. Essa cultura contribui para a normalização da violência contra as mulheres e dificulta a erradicação do feminicídio.</p>

          <p> Falta de conscientização e educação: A falta de conscientização sobre os direitos das mulheres e a importância de se combater a violência de gênero pode contribuir para a persistência do problema. Uma educação inadequada em relação à igualdade de gênero e ao respeito mútuo pode perpetuar comportamentos violentos.</p>

          <p> Sistema de justiça lento e ineficiente: A impunidade e a demora na responsabilização dos agressores também são problemas significativos no Brasil. A falta de agilidade e eficácia do sistema de justiça pode desencorajar as vítimas a denunciarem os casos e dificultar o acesso à justiça. </p>


          <img className='razoes' src={img2}/>
          <p>O feminicídio é um crime que pode afetar mulheres de todas as raças e etnias. A violência de gênero não escolhe suas vítimas com base na cor da pele.</p>


          <img className='razoes' src={img3}/>
          <p> Aqui mostramos uma curiosidade da idade das vítimas </p>

 
          <img className='razoes' src={img4}/>
          <p> A falta de investimento em políticas públicas voltadas à prevenção da violência doméstica e à proteção de mulheres vítimas é um grande fator para ter aumentado o feminicídio no Brasil. </p>
          

          <img className='razoes' src={img5}/>
          <p>Os feminicídios podem ocorrer em diferentes locais, incluindo residências. Existem algumas razões pelas quais isso pode acontecer:</p>
          <p>Violência doméstica: Muitos feminicídios têm origem na violência doméstica. As residências são espaços onde ocorrem relacionamentos íntimos e familiares, e é nesse contexto que podem surgir conflitos, abusos e violência. Infelizmente, algumas mulheres são mortas por parceiros ou ex-parceiros dentro de casa.</p>
          <p>Isolamento e controle: Em alguns casos, os agressores buscam isolar as vítimas, controlando seus movimentos e limitando seu acesso a apoio externo. Isso pode fazer com que a residência se torne um local propício para a ocorrência de feminicídios, pois a vítima pode ter dificuldade em buscar ajuda ou escapar da situação de violência.</p>
          <p>Sensação de poder e impunidade: Os agressores podem se sentir mais à vontade para cometer atos de violência dentro de casa, pois se trata de um espaço familiar onde eles se sentem no controle. A proximidade com a vítima e a sensação de impunidade em um ambiente privado podem encorajar a violência.</p>
          <p>Dificuldade de intervenção externa: Em muitos casos, vizinhos e pessoas próximas podem não perceber os sinais de violência que ocorrem dentro de uma residência. A intimidade do ambiente doméstico e o medo de represálias podem dificultar a intervenção e a denúncia.</p>
          <Footer/>
        </div>
      </>
    )
  }
  
  export default Home