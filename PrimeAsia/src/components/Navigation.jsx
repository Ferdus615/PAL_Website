const Navigation = () => {
  return (
    <nav>
      <div className="nav-logo">
        <a href="#">
          <img src="./images/pal logo nav.svg" alt="PAL logo" />
        </a>
        <p className="name">Prime Automations Ltd.</p>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#Footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
