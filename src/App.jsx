import Header from "./components/Header"
import ModalFiltrar from "./components/modalFiltrar"
import CargaCards from "./components/Contenedor-Cards"

function App() {
  return (
    <div className="relative min-h-screen mx-4 lg:m-0 lg:px-0 flex flex-col lg:w-screen dark:bg-gray-800">
      <Header/>
      <ModalFiltrar/>
      <CargaCards/>
      <footer>By Mario Cruz</footer>
    </div>
  )
}

export default App
