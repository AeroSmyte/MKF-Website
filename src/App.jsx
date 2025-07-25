import './App.css'
import Carousel from './components/Carousel/Carousel.jsx'
import ContentSection from './components/ContentSection/ContentSection.jsx'
import InfoBar from './components/InfoBar/InfoBar.jsx'
import NavBar from './components/NavBar/NavBar.jsx'


function App() {
  return (
    <>
        <NavBar />
        <Carousel />
        <InfoBar />
        <ContentSection />
    </>
  )
}

export default App
