import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Sobre from './components/Sobre/Sobre'
import Featured from './components/Featured/Featured'
import Programacao from './components/Programacao/Programacao'
import Convidados from './components/Convidados/Convidados'
import Valor from './components/Valor/Valor'
import Acervo from './components/Acervo/Acervo'
import Momentos from './components/Momentos/Momentos'
import Footer from './components/Footer/Footer'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#sobre">
        Ir para o conteúdo
      </a>
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Featured />
        <Programacao />
        <Convidados />
        <Valor />
        <Acervo />
        <Momentos />
      </main>
      <Footer />
    </>
  )
}
