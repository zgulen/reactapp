import navbarStyle from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={navbarStyle["navbar-container"]}>
        <ul className={navbarStyle["navbar-container__ul"]}>
          <li><a href="about us">ABOUT US</a></li>
          <li><a href="for-you">FOR YOU</a></li>
          <li><a href="service">SERVICES</a></li>
          <li><a href="blog">BLOG</a></li>
          <li><a href="vlog">VLOG</a></li>
          <li><a href="contact">CONTANCT</a></li>
        </ul>
    </div>
  )
}

export default Navbar