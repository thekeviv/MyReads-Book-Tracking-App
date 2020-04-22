import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
class SearchPage extends Component {
  state = {
    searchTerm: "",
    searchResults: []
  };

  getSearchBooksResults = async value => {
    let searchResults = await BooksAPI.search(value);
    return searchResults;
  };

  onSearchEnter = async value => {
    let booksResults = await this.getSearchBooksResults(value);
    booksResults && booksResults.length > 0
      ? this.setState({
          searchTerm: value,
          searchResults: booksResults
        })
      : this.setState({
          searchTerm: value,
          searchResults: []
        });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="./">
            <button
              className="close-search"
              onClick={this.props.toggleSearchPage}
            >
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchTerm}
              onChange={event => this.onSearchEnter(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map(book => (
              <li>
                {book.imageLinks ? (
                  <Book
                    name={book.title}
                    author={book.author}
                    coverUrl={book.imageLinks.smallThumbnail}
                    updateBookShelf={this.props.updateBookShelf}
                  />
                ) : (
                  <Book
                    name={book.title}
                    author={book.author}
                    coverUrl={""}
                    updateBookShelf={this.props.updateBookShelf}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
