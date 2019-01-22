import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'

const PostForm = (props) => {
  return(
    <Segment padded="very">
    <Header size="large">New Article:</Header>
    <Form onSubmit={props.handleSubmit}>
      <Form.Field>
        <label>Title:
          <input
            type="text"
            name="title"
            value={props.title}
            onChange={props.handleChange}/>
        </label>
      </Form.Field>
      <Form.Field>
        <label>Content:
          <textarea
            name="content"
            value={props.content}
            onChange={props.handleChange}>
          </textarea>
        </label>
      </Form.Field>
      <Form.Field>
        <Button primary type="submit">Submit</Button>
      </Form.Field>
    </Form>
    </Segment>
  )
}

export default PostForm
