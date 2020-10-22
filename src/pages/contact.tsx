import React from "react"
import Layout from '../components/layout'
import style from './contact.module.css'
export default function Contact() {

  return <Layout>

<form className={style.contact}>
  <div className="formRow">
  
    <input type="text" name="name" placeholder="User name"  />
  </div>
  <br/>
  <div className="formRow">
    
    <input type="email" name="email" placeholder="Email address"  />
  </div>
  <br/>
  <div className="formRow">
    <strong>Any futher Details: </strong>
    <br/>
    <textarea name="comments" cols="30" rows="6" placeholder="Enter your comments"></textarea>
  </div>
  <button type="submit">Submit</button>
</form>

  </Layout>
}
