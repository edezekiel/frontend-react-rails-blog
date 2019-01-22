import React from 'react'

import { Container } from 'semantic-ui-react'

const Contact = (props) => {
  return (
    <Container text textAlign="justified" style={{"margin-top": "7rem"}}>
      <h1>Follow me on:</h1>
      <a href="https://twitter.com/EdwardAEzekiel" target="_blank" rel="noopener noreferrer"><p>Twitter</p></a>
      <a href="https://github.com/edezekiel" target="_blank" rel="noopener noreferrer"><p>Github</p></a>
      <a href="https://www.linkedin.com/in/edwardezekiel/" target="_blank" rel="noopener noreferrer"><p>Linkedin</p></a>
    </Container>
  )
}

export default Contact
