import React, { Component } from 'react';
import './App.css';
import 'cat-fact-component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      content: ''
    };
  }

  componentDidMount() {
    fetch(
      'https://cat-fact-wp.carrieforde.co/wp-json/wp/v2/posts?slug=hello-world'
    )
      .then(res => res.json())
      .then(response => {
        console.log(response);
        this.setState({ content: response[0].content.rendered });
      });
  }

  render() {
    const { content } = this.state;
    return (
      <>
        <h1>Cat Facts</h1>
        {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      </>
    );
  }
}

export default App;
