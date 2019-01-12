import React, {Component} from 'react'

export default class Textarea extends Component {
  constructor(props) {
    super(props);
      this.state = {
        value: 'Add blog post here'
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert("A post was submitted" + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <textarea
        value={this.state.value}
        onChange={this.handleChange}>
      </textarea>
    )
  }
}
