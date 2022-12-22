import './PageContent.css'

function PageContent({ sections }) {
  return (
    <div>
      {sections.map((section) => {
        switch (section.type) {
          case 'hero':
            return (
              <div key={section.type} className="section">
                <h1>{section.text}</h1>
                <img src={section.img} alt={section.text} />
              </div>
            )
          case 'testimonial':
            return (
              <div className="section" key={section.type}>
                <blockquote>
                  <p>{section.text}</p>
                  <footer>{section.author}</footer>
                </blockquote>
              </div>
            )
          case 'newsletter':
            return (
              <div className="section" key={section.type}>
                <form>
                  <label htmlFor="email">Sign up for our newsletter:</label>
                  <input type="email" id="email" />
                  <button type="submit">Sign Up</button>
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
