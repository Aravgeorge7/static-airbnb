import React from "react"



/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function Card(prop) {
    const main_pic = "src/images/" +  prop.img
    let badgeText
    if (prop.openSpot === 0) {
        badgeText = "SOLD OUT"
    } else if (prop.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        
        <div className="card">
            
            {badgeText && <div className="badger">{badgeText}</div>}
            <img src={main_pic} className="main_photo"/>
            <div>
                <img src="src/images/Star 1.png" className="star" />
                <spam className="rating">{prop.rating}</spam>
                <spam className="review-count">{' ('+ prop.reviewCount +')·' +prop.location}</spam>
            </div>
            <p className="desc">{prop.title}</p>
            <p>${prop.price}</p>
        </div>
    )
}