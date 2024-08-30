import './App.css'
import Footer from './components/footer/Footer'
import MainPage from './components/mainpage/MainPage'

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-custom-bg bg-cover'>
      <div className='flex-grow'>
      <MainPage />
      </div>
      <Footer />
    </div>
  )
}

export default App
