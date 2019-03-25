import React from 'react'

import { Container, Icon, Header } from "semantic-ui-react"
import { Link } from 'react-router-dom'

const About = (props) => {
  return(
    <Container text>
      <Header>About Me</Header>
      <p>My name is Ed Ezekiel. I am a web developer and I recently graduated from <a href="https://flatironschool.com/">
        Flatiron's</a> immersive software engineering bootcamp in Atlanta.
        This blog is about programming, web development, and my journey
        from practicing law to loving code.</p>

      <p>I grew up in Maryland and my wife is from Memphis, TN.
      When I'm not programming, I'm probably cheering on the Memphis Grizzlies
      with my wife Farley, or playing with my dogs Buddy and Grace.</p>

      <Header><Link to="/login" className="item"><Icon name="heart" color="violet"></Icon></Link> Code</Header>

      <p>My passion for coding began when I was working at UnitedLex. I
      managed document review projects involving millions of files. In order to
      streamline my workflow, I picked up computer skills like performing advanced
      database queries, writing excel programs, and creating virtual workspaces.</p>

      <p>I discovered macros, Visual Basic, and keyboard shortcuts that
      seemed like magic. Excel programming and querying was fun, but I
      became curious about the broader field of programming.
      Over the next two years I took more online lessons, learned bits
      about computer science, and started looking into bootcamps.</p>

      <p>In 2018, I ran into Flatiron's free online <a href="https://flatironschool.com/free-courses/coding-bootcamp-prep/">
      Coding Bootcamp Prep Course</a>. I decided to follow my passion and I have
      been completely hooked on web development ever since. </p>
    </Container>
  )
}

export default About
