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
      <Card />
      <Card />
    </div>
  )
}

export default Container
