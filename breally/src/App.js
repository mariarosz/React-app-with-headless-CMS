import './App.css'
import TopNavbar from './components/TopNavbar/TopNavbar'
import { BrowserRouter } from 'react-router-dom'
import PageContent from './components/Page/PageContent'
import APIService from './services/APIservice'
import { useEffect, useState } from 'react'

function App() {
  const [links, setLinks] = useState([])
  const [sections, setSections] = useState([])

  useEffect(() => {
    APIService.getPages().then((result) => setLinks(result))
  }, [])

  useEffect(() => {
    if (links && links.length > 0) {
      APIService.getPageContent(links[0].id).then((result) =>
        setSections(result.sections),
      )
    }
  }, [links])

  return (
    <div className="page-content">
      <BrowserRouter>
        <TopNavbar links={links} />
        {links && links.length > 0 ? <PageContent sections={sections} /> : null}
      </BrowserRouter>
    </div>
  )
}

export default App
