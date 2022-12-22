import './PageContent.css'
import { ReactComponent as QuotesIcon } from '../../assets/quotation-mark.svg'
import APIService from '../../services/APIservice'
import { useState } from 'react'

function PageContent({ sections }) {
  const [message, setMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const signup = {
      email: event.target.email.value,
    }
    const status = await APIService.addToNewsletter(signup)
    setMessage(status.message)
    event.target.reset()
  }

  return (
    <div>
      {sections.map((section) => {
        switch (section.type) {
          case 'hero':
            return (
              <div key={section.type} className="section">
                <h1>{section.text}</h1>
                <img
                  src={section.img}
                  alt={section.text}
                  id="hero-image"
                  width="370"
                  height="384"
                />
              </div>
            )
          case 'testimonial':
            return (
              <div className="section testimonial" key={section.type}>
                <blockquote className="content">
                  <QuotesIcon />
                  <p>{section.text}</p>
                  <footer id="author">{section.author}</footer>
                </blockquote>
              </div>
            )
          case 'newsletter':
            return (
              <div className="section" key={section.type}>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="email">
                    <h1>Sign up for our newsletter:</h1>
                  </label>
                  <div className="input-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Type your email"
                      className="input-field"
                    />
                    <button type="submit" className="default-btn">
                      Sign Up
                    </button>
                  </div>
                  <p id="confirmation">{message}</p>
                </form>
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default PageContent
