import React, {Component} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class ArticleForm extends Component {
  constructor(props) {
    super(props);
      this.state = {
        title: 'New blog title',
        content: 'New blog content'
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    const article = {title: this.state.title, text: this.state.content}
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article)
    }
    return fetch("http://localhost:3000/api/v1/articles", options)
    .then(res => res.json())
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}/>
          </label>
        </Form.Field>
        <Form.Field>
          <label>Content:
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handleChange}>
            </textarea>
          </label>
        </Form.Field>
        <Form.Field>
          <Button primary type="submit">Submit</Button>
        </Form.Field>
      </Form>
    )
  }
}
