import React, { Component } from 'react';

import Index from '../presentational/Index.js'

const URL = "https://backend-edezekiel-blog.herokuapp.com/api/v1/articles"

export default class IndexContainer extends Component {
  state = { articles: [] }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(articles => this.setState({articles: articles}))
  }

  render() {
    return (
      <Index articles={this.state.articles}/>
    )
  }
}
