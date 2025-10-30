import { Link } from "react-router-dom";

function NavBar() {
  const items = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "How it Works", path: "/how-it-works" },
    { title: "Pricing", path: "/pricing" },
    { title: "Solutions", path: "/solutions" },
    { title: "Resources", path: "/resources" },
    { title: "Get Started", path: "/get-started" },
  ];

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary hercules-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand hercules-title" to="/">
          Hercules
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {items.map((item, index) => (
              <Link
                key={index}
                className="nav-link"
                to={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
