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
        <h1>Nova Drift</h1>
      </section>
    </main>
  )
}

export default App;
