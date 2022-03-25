export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper header-nav">
        <a href="#" className="brand-logo">
          React Movie
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Movies</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
