import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Container from './Container'
import ValueSell from './ValueSell'
import Footer from './Footer'
import Header from './Header'
import FontFaces from '../styles/FontFaces'
import Reset from '../styles/Reset'
import Tags from '../styles/Tags'
import Tweets from '../styles/Tweets'
import Typography from '../styles/Typography'
import { bs } from '../shevy'

const Layout = ({ children }) => (
  <Fragment>
    <Reset />
    <FontFaces />
    <Tags />
    <Typography />
    <Tweets />

    <Header />
    <main
      css={{
        paddingBottom: bs(2),
        minHeight: '65vh'
      }}
      role="main"
    >
      <Container>{children}</Container>
    </main>
    <ValueSell />
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
