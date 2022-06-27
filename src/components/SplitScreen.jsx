import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <div className="main__nav">
            <nav className="navbar navbar-expand-lg p-2">
  <div className="container-fluid">
    <a className="navbar-brand" style={{ fontSize: 35}} href="#">Victor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/docs">Docs</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar