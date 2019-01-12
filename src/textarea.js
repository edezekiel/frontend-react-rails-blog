import React, {Component} from 'react'

export default class Textarea extends Component {
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
      <form
        onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}/>
        </label>
        <label>Content:
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleChange}>
          </textarea>
        </label>

        <input type="submit" value="Submit" />
      </form>
    )
  }
}
