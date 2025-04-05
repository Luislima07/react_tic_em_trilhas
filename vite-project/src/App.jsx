import Cabecalho from './components/Cabecalho/Cabecalho'
import Conteudo from './components/Conteudo/Conteudo'
import Footer from './components/Footer/Footer'

import { Inicial } from './pages'

import './App.css'



const  App = () => {
  return (
    <div>
      <Cabecalho />
      <Conteudo>
        <Inicial></Inicial>
      </Conteudo>
      <Footer></Footer>
    </div>
  )
}

export default App