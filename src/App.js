import React, { Component, Fragment } from 'react';
import GlobalStyle from './styles/Global';
import Header from './components/header/';
import Book from './components/book/';
import api from './services/api';
import Footer from './components/footer/';

export default class App extends Component {
  state = {
    listOfBooks: [],
  };
  
  componentDidMount = async () => {
    try {
      const response = await api.get(``);      
      this.setState({
        listOfBooks: response.data.results.books,
      });
    } catch (err) {
      console.log("Ocorreu um erro!");     
    } finally {
      console.log(this.state.listOfBooks);
    }
  };
  
  render() {
    
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <div className="Books">
          <Book books={this.state.listOfBooks} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
