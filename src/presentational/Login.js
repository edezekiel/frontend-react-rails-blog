import React from 'react'

import { Button, Form, Container, Header } from 'semantic-ui-react'

const Login = (props) => {
  return(
    <Container text>
      <Form onSubmit={props.handleSubmit}>
        <Form.Field>
          <Header>Username</Header>
            <input
              type="text"
              name="username"/>
        </Form.Field>
        <Form.Field>
          <Header>Password</Header>
            <input
              type="text"
              name="password"/>
        </Form.Field>
        <Form.Field>
          <Button primary type="submit">Submit</Button>
        </Form.Field>
      </Form>
    </Container>
  )
}

export default Login
