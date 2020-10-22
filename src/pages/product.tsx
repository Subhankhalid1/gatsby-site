import React from "react"
import { Router } from "@reach/router"
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import style from './product.module.css'
// import ProductOne from "../components/page1"
// import ProductTwo from "../components/page2"
// import Main from "../components/main"
import Electronics from '../templates/electronics'
const App = () => {
  return (
    <Layout>
      <h1>See More Products</h1>
      <div className={style.grid}>
      <div>
          <Link to="/electronics/phone3">iPhone12</Link>
        </div>
        <div>
          <Link to="/electronics/phone4">iPhone11 Pro Max</Link>
        </div>


        <div >
          <Link to="/electronics/phone1">iPhoneX</Link>
        </div>

        <div>
          <Link to="/electronics/phone2">iPhone7 plus</Link>
        </div>
        <div>
          <Link to="/electronics/phone5">iPhone6</Link>
        </div>

        <div >
          <Link to="/electronics/phone6">iPhone5</Link>
        </div>
        <div>
          <Link to="/electronics/phone7">iPhone3</Link>
        </div>

        <div>
          <Link to="/electronics/phone2">iPhone7 plus</Link>
        </div>

        <div>
          <Link to="/electronics/phone3">iPhone12</Link>
        </div>
        <div>
          <Link to="/electronics/phone1">iPhoneX</Link>
        </div>

       

      </div>
      <Router basepath="/product">
        <Electronics path="/electronics" />
        {/* <ProductTwo path="/page2" /> */}
        {/* <Main path="/" /> */}
      </Router>
    </Layout>
  )
}

export default App