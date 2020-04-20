import React, { Component } from "react";
//import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class BooksPage extends Component {
  static propTypes = {};
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf name={"Currently Reading"} books={[]} />
          <BookShelf name={"Want to Read"} books={[]} />
        </div>
      </div>
    );
  }
}

export default BooksPage;
