import React from 'react'
import classes from './Loader.module.css'

const AmazonLoader = () => {
  return (
    <div className={classes.lds_ring_container}>
      <h4>If You can Read this then you need to</h4>
      <h2>Enable CORS and reload to view Details Page :(</h2>
      <div className={classes.lds_ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  </div>
  )
}

export default AmazonLoader