import React from "react"
import data from "./data"
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

import Navbar from "./Navbar"

import Hero from "./hero"
import Card from "./card"

export default function App() {

  const cards = data.map(x => {
    return (
        <Card 
            key = {x.id}
            img={x.coverImg}
            rating={x.stats.rating}
            reviewCount={x.stats.reviewCount}
            location={x.location}
            title={x.title}
            price={x.price}
            openSpot = {x.openSpots}
        />
    )
  }) 

    return (
      
      <div>

        <Navbar />
        <Hero />
        <div className="list">{cards}</div>
        


      </div>
    )
}