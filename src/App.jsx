import './App.css'
import NovaDriftIcon from "./assets/nova-drift-icon.png"
import NovaDrift from "./assets/nova-drift.png"

function App() {

  return (
    <main>
      <nav>
        <img src={NovaDriftIcon} width={80} />
        <button type="button">Comprar</button>
      </nav>
      <section>
        <h1>Sinta o poder da velocidade com o Nova DRIFT.</h1>
        <p>Entre no mundo do street drifting underground. Personalize seu carro, forme sua equipe e dispute batalhas épicas pela supremacia nas pistas urbanas mais desafiadoras do mundo.</p>
        <button id='experimentar-agora-button'>
          Experimentar Agora
        </button>
      </section>
    </main>
  )
}

export default App;
