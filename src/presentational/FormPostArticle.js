import React from 'react'
import { Button, Form, Header } from 'semantic-ui-react'

const FormPostArticle = (props) => {
  return(
    <Form onSubmit={props.handleSubmit}>
      <Form.Field>
        <Header>Title</Header>
          <input
            type="text"
            name="title"
            value={props.title}
            onChange={props.handleChange}/>
      </Form.Field>
      <Form.Field>
        <Header>Content:</Header>
          <textarea
            name="content"
            value={props.content}
            onChange={props.handleChange}>
          </textarea>
      </Form.Field>
      <Form.Field>
        <Button primary type="submit">Submit</Button>
      </Form.Field>
    </Form>
  )
}

export default FormPostArticle
