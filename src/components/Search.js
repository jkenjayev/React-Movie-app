import React from "react";

export default class Search extends React.Component {
  state = {
    searchValue: "sniper",
    type: "all",
  };

  handleValue = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.searchValue, this.state.type);
    }
  };

  filteringType = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.searchValue, this.state.type);
      }
    );
  };
  render() {
    return (
      <>
        <div className="row">
          <div className="col offset-l1 s9">
            <div className="input-field">
              <input
                id="email_inline"
                placeholder="Search Movie"
                type="search"
                className="validate search-input"
                value={this.state.searchValue}
                onChange={(e) => {
                  this.setState({ searchValue: e.target.value });
                }}
                onKeyDown={this.handleValue}
              />
              <button
                className="btn btn-info search-btn"
                onClick={() =>
                  this.props.searchMovies(
                    this.state.searchValue,
                    this.state.type
                  )
                }
              >
                Search Movie
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-l1 s9">
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="all"
                onChange={this.filteringType}
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="movie"
                onChange={this.filteringType}
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="series"
                onChange={this.filteringType}
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
            <label>
              <input
                className="with-gap"
                name="type"
                type="radio"
                data-type="cartoon"
                onChange={this.filteringType}
                checked={this.state.type === "cartoon"}
              />
              <span>Cartoon only</span>
            </label>
          </div>
        </div>
      </>
    );
  }
}
