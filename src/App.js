import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksPage from "./BooksPage";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";
class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.getBooks();
  }
  state = {
    showSearchPage: false,
    books: []
  };

  toggleSearchPage = () => {
    this.setState(prevState => ({
      showSearchPage: !prevState.showSearchPage
    }));
  };

  getBooks = async () => {
    let books = await BooksAPI.getAll();
    this.setState({
      books: books
    });
  };

  updateBookShelf = (bookName, newShelfName) => {
    let bookToUpdate = this.state.books.filter(
      book => book.title === bookName
    )[0];
    bookToUpdate.shelf = newShelfName;
    let bookRemovedFromShelf = this.state.books.filter(
      currentBook => currentBook.title !== bookName
    );
    bookRemovedFromShelf.push(bookToUpdate);
    this.setState({
      books: bookRemovedFromShelf
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchPage
              toggleSearchPage={this.toggleSearchPage}
              updateBookShelf={(bookName, newShelfName) =>
                this.updateBookShelf(bookName, newShelfName)
              }
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <BooksPage
              toggleSearchPage={this.toggleSearchPage}
              books={this.state.books}
              updateBookShelf={(bookName, newShelfName) =>
                this.updateBookShelf(bookName, newShelfName)
              }
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
