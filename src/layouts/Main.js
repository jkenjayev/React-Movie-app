import React from "react";
import Loader from "../components/Loader.js";
import Movies from "../components/Movies.js";
import Search from "../components/Search.js";

export default class Main extends React.Component {
  /* State that is used through the project */
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=4d7272b0&s=hacker")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=4d7272b0&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    return (
      <>
        <Search searchMovies={this.searchMovies} />
        <div className="container-fluid content">
          {this.state.loading ? (
            <Loader />
          ) : (
            <Movies movies={this.state.movies} />
          )}
        </div>
      </>
    );
  }
}
