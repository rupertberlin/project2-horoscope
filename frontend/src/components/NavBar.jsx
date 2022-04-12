import "@components/NavBar.css";

export default function NavBar() {
  return (
    <nav id="nav">
      <ul>
        <li>
          <a href="#">
            <i className="fi-home" />
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fi-target" />
            Zodiac Sign
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fi-heart" />
            Love Game
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fi-at-sign" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
