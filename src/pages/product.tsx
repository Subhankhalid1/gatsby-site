import React from "react"
import { Router } from "@reach/router"
import {Link} from 'gatsby'
import Layout from "../components/Layout"
import ProductOne from "../components/page1"
import ProductTwo from "../components/page2"
import Main from "../components/main"

const App = () => {
  return (
    <Layout>
        <div>
            <h1>See More Products</h1>
           <Link to="/product/page1">Page 1</Link>
           <br/>
           <Link to="/product/page2">Page 2</Link>
        </div>
      <Router basepath="/product">
        <ProductOne path="/page1" />
        <ProductTwo path="/page2" />
        <Main path="/" />
      </Router>
    </Layout>
  )
}

export default App