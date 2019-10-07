import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/Global";
import Header from "./components/header/";
import Book from "./components/book/";
import api from "./services/api";
import Footer from "./components/footer/";

export default function App() {
  const [listOfBooks, setListOfBooks] = useState([]);

  useEffect(() => {
    async function ConsultApi() {
      try {
        const response = await api.get(``);
        setListOfBooks(response.data.results.books);
        console.log("List of books", listOfBooks);
      } catch (err) {
        console.log("Ocorreu um erro");
      }
    }

    ConsultApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="Books">
        <Book books={listOfBooks} />
      </div>
      <Footer />
    </>
  );
}
