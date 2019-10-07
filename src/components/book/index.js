import React from "react";
import {
  BoxBook,
  Position,
  Author,
  Title,
  Description,
  Plus,
  Container
} from "./style";

export default function Book({ books }) {
  return (
    <Container>
      {books.map(book => (
        <BoxBook key={book.primary_isbn10}>
          <Position>{book.rank}</Position>
          <img alt="livro" src={book.book_image} />
          <Author>{book.author}</Author>
          <Title>{book.title}</Title>
          <Description>{book.description}</Description>
          <Plus href={book.amazon_product_url} target="_blank">
            <span className="fa fa-amazon"></span>
          </Plus>
        </BoxBook>
      ))}
    </Container>
  );
}
