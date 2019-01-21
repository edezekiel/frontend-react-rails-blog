import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const LoginForm = (props) => {
  return(
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
  )
}

export default LoginForm
