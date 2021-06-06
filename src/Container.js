import React from "react"
import Card from './Card'
import "./Container.css"
import { getFeed } from './Utility'

const feed = getFeed()

const Container = () => {
    console.log(feed)
  return (
    <div className="container">
      This is the container
      I plan on showing data from an NPR podcast feed here
      Once I get the data
      CORS yay
      <Card />
      <Card />
    </div>
  )
}

export default Container
