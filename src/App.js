import React, { Component, Fragment } from 'react';
import GlobalStyle from './styles/Global';
import Header from './components/header/index';
import Book from './components/book/index';
import api from './services/api';

export default class App extends Component {
  state = {
    listOfBooks: [],
  };
  
  handleAddRepository = async (e) => {
    e.preventDefault();
    try {
      
      const response = await api.get(``);      
      this.setState({
        listOfBooks: [ response.data.results.books ],
      });
      // console.log(response.data.results);
    } catch (err) {
      console.log("Ocorreu um erro!");     
    } finally {
      console.log(this.state.listOfBooks);
      // console.log(this.state.listOfBooks);
    }
  };
  
  render() {
    
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <button onClick={this.handleAddRepository}>clique</button>
        <div className="Books">
          <Book books={this.state.listOfBooks} />
        </div>
      </Fragment>
    );
  }
}
