import React from "react"
import { Link, StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

class Header extends React.Component {
    render() {

        return (
            <StaticQuery
            query={headerQuery}
            render={data => {
    
                return (
                    <header className="site-header">
                        <Link to='/'>
                            <Image
                                fixed={data.avatar.childImageSharp.fixed}
                                alt='Software Architecture México'
                            />
                        </Link>
                    </header>
                )
            
            }}/>
        )
        
    }
    
}

const headerQuery = graphql`
  query headerQuery {
    avatar: file(absolutePath: { regex: "/software-architecture.png/" }) {
      childImageSharp {
        fixed(width: 268, height: 133) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`


export default Header
