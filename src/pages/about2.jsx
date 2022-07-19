// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Howdy, I'm John Killian. I've been using HTML, CSS and JS for years and finally want to expand my knowledge by using React and Gatsby!</p>
    </main>
  )
}
// Step 3: Export your component
export default AboutPage