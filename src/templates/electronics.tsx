import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import style from './electronics.module.css'
import { Link } from 'gatsby'
function Electronics({ pageContext }) {
    console.log(pageContext)
    const { itemDetail } = pageContext
  
    return <div className={style.phones} >
        <h1 style={{color:"gray"}}>   {itemDetail.title}</h1>
        
        <p>{documentToReactComponents(itemDetail.description.json)}</p>
        <Link target="_blank" to='/product'>Back</Link>
    </div>
}

export default Electronics