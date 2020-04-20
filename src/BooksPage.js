import React, { Component } from "react";
import PropTypes from "prop-types";

class BooksPage extends Component {
  static propTypes = {};
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div />
        </div>
      </div>
    );
  }
}

export default BooksPage;
