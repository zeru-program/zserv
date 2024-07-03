import { useLocation } from "react-router-dom"
const Navbar = () => {
  const loc = useLocation();
  return (
    <nav className="navbar fixed-top navbar-expand-lg" style={{backdropFilter : "blur(4px)"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
         <img alt="img-nav" src="/zserv-nav.png" style={{width: "100px"}} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="bi bi-list nav-toggler-icon text-warning" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className={`nav-link ${loc.pathname === "/" ? "active" : ""}`} aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${loc.pathname === "/dev/jasa-pembuatan-website" || loc.pathname === "/dev/jasa-pembuatan-aplikasi" || loc.pathname === "/dev/jasa-landing-page" ? "active" : ""}`} href="" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Jasa development
              </a>
              <div className="dropdown-menu bg-info" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/dev/jasa-pembuatan-website">Pembuatan website</a>
                <a className="dropdown-item" href="/dev/jasa-pembuatan-aplikasi">Pembuatan aplikasi</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className={`nav-link dropdown-toggle ${loc.pathname === "/design/jasa-design" ? "active" : ""}`} href="" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Jasa desain
              </a>
              <div className="dropdown-menu bg-info" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/design/jasa-design">Produk designer</a>
                <a className="dropdown-item" href="/design/jasa-design">Web design / UI UX</a>
                <a className="dropdown-item" href="/design/jasa-design">Logo designer</a>
              </div>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${loc.pathname === "/portofolio" ? "active" : ""}`} href="/portofolio">Our portofolio</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${loc.pathname === "/contact-us" ? "active" : ""}`} href="/contact-us">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar