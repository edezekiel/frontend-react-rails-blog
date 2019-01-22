import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'

const LoginForm = (props) => {
  return(
    <Container text textAlign="justified" style={{"margin-top": "7rem"}}>
      <Form onSubmit={props.handleSubmit}>
        <Form.Field>
          <label>Username
            <input
              type="text"
              name="username"/>
          </label>
        </Form.Field>
        <Form.Field>
          <label>Password
            <input
              type="text"
              name="password"/>
          </label>
        </Form.Field>
        <Form.Field>
          <Button primary type="submit">Submit</Button>
        </Form.Field>
      </Form>
    </Container>
  )
}

export default LoginForm
