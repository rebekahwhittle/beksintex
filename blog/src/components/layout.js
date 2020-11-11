import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/"> 🤠</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
         🤠
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        powered by coffee and 
        {` `}
        <a target="_blank" href="https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02?si=t7zb9rewR524sJ_7ZqZ5Kg">taylor swift</a>
      </footer>
    </div>
  )
}

export default Layout
