import './App.css'
import TopNavbar from './components/TopNavbar/TopNavbar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
      </BrowserRouter>
    </>
  )
}

export default App
