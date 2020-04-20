import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class BooksPage extends Component {
  static propTypes = {
    toggleSearchPage: PropTypes.func.isRequired
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            name={"Currently Reading"}
            books={this.props.books.filter(
              book => book.shelf === "currentlyReading"
            )}
          />
          <BookShelf
            name={"Want to Read"}
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
          />
          <BookShelf
            name={"Read"}
            books={this.props.books.filter(book => book.shelf === "read")}
          />
        </div>
        <div className="open-search">
          <button onClick={this.props.toggleSearchPage}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default BooksPage;
