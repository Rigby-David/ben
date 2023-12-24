import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className="header-col-1">
        <div className="col-1-contents">
          <div className="col-1-title">
            <h3>Ben Fisher</h3>
          </div>
          <div className="col-1-desc">
            <p>Technical Writer, User Advocate, Process Nerd</p>
          </div>
        </div>
      </div>
      <div className="header-col-2">
        <nav className="nav-container">
          <a href="">About</a>
          <a href="">Resume</a>
          <a href="">Portfolio</a>
        </nav>
      </div>
    </header>
  );
}
