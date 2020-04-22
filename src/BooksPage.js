import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

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
            updateBookShelf={this.props.updateBookShelf}
          />
          <BookShelf
            name={"Want to Read"}
            books={this.props.books.filter(book => book.shelf === "wantToRead")}
            updateBookShelf={this.props.updateBookShelf}
          />
          <BookShelf
            name={"Read"}
            books={this.props.books.filter(book => book.shelf === "read")}
            updateBookShelf={this.props.updateBookShelf}
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button onClick={this.props.toggleSearchPage}>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksPage;
