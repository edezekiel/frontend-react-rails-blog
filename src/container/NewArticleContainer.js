import React, {Component} from 'react'

import { Redirect } from 'react-router-dom'

import { Container, Header } from 'semantic-ui-react'

import NewArticle from '../presentational/NewArticle.js'

export default class NewArticleContainer extends Component {
  state = {
    title: '',
    content: '',
    date: '',
    image: '',
    redirect: false,
    articleId: null
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    const article = {title: this.state.title, text: this.state.content, date: this.state.date, image: this.state.image}
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article)
    }
    return fetch("https://backend-edezekiel-blog.herokuapp.com/api/v1//articles", options)
    .then(res => res.json())
    .then(article => this.setState({redirect: true, articleId: article.id}))
  }

  render() {
    return (
      <div>
      {this.props.user ?
        <NewArticle
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          date={this.state.date}
          image={this.state.image}
          content={this.state.content}
          />
          :
          <Container>
            <Header>Unauthorized</Header>
          </Container>
        }
      {this.state.redirect ? <Redirect to={"/" + this.state.articleId}/> : null }
    </div>
    )
  }
}
