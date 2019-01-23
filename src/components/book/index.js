import React from 'react';
import { BoxBook, Position, Author, Title, Description, Plus } from './style';

const Book = ({ books }) => (
  <div>
  { books.map(book => (
    <BoxBook key={book.primary_isbn10}>
      <Position>{book.rank}</Position>
      <img alt="livro" src={book.book_image} />
      <Author>{book.author}</Author>
      <Title>{book.title}</Title>
      <Description>{book.description}</Description>
      <Plus>+</Plus>
    </BoxBook> 
  ))}
  </div>
);

export default Book;
