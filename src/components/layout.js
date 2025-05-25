import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";

const Layout = (props) => {
  const data = useLocation();
  const { title, children, social } = props;
  // const path = props&&props.location&&props.location

  const footerData = useStaticQuery(graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "opening-hours" } }) {
      frontmatter {
        opening_hours {
          days
          hours
        }
      }
    }
  }
`);

  const openingHours = footerData.markdownRemark.frontmatter.opening_hours;

  const [toggleNav, setToggleNav] = React.useState(false);
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li
                className={`nav-home  ${data.pathname === "/" ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/`}>Home</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/menu") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/menu`}>Menu</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/work") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/work`}>Workshops</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/location") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/location`}>Location</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/contact") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li
                className={`nav-home  ${data.pathname.includes("/reservation") ? "nav-current" : ""} `}
                role="menuitem"
              >
                <Link to={`/reservation`}>Reservation</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <Link
                to={`https://facebook.com/${social.facebook}`}
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </Link>
              <Link
                to={`https://instagram.com/${social.twitter}`}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        <p>&copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link></p>
        <p><strong>Öffnungszeiten:</strong><br />
          {openingHours.map((entry, idx) => (
            <div key={idx}>
              {entry.days}: {entry.hours}
            </div>
          ))}
        </p>
        <p>
          <Link to="/impressum">Impressum</Link> |{" "}
          <Link to="/datenschutz">Datenschutz</Link>
        </p>
      </footer>
    </div>
  );
};

export default Layout;