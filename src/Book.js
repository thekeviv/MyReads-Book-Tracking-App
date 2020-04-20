import React, { Component } from "react";
import PropTypes from "prop-types";
class Book extends Component {
  state = {
    shelfName: "default"
  };

  changeShelf = event => {
    this.props.updateBookShelf(this.props.name, event.target.value);
  };

  static propTypes = {
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${this.props.coverUrl})`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.changeShelf}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.name}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }
}

export default Book;
