import React, {Fragment} from "react"
import Header from "./header"

class Layout extends React.Component {
  
  render() {

    const { children } = this.props

    return (
      <Fragment>
        <Header></Header>
        <main className="list">{children}</main>
        <footer className="site-footer">
          © {new Date().getFullYear()} Software Architecture México
        </footer>
      </Fragment>
    )
  }
}

export default Layout
