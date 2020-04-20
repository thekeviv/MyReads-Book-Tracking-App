import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
class BookShelf extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map(book => (
              <li key={book.title}>
                <Book
                  name={book.title}
                  author={book.author}
                  coverUrl={book.imageLinks.smallThumbnail}
                  updateBookShelf={this.props.updateBookShelf}
                />
              </li>
            ))}
            <li />
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
