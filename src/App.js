import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksPage from "./BooksPage";
import SearchPage from "./SearchPage";

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

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage toggleSearchPage={this.toggleSearchPage} />
        ) : (
          <BooksPage
            toggleSearchPage={this.toggleSearchPage}
            books={this.state.books}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
