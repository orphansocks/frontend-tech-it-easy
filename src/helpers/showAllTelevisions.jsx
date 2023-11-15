import React from "react";

function showAllTelevisions(allTelevisionsArray) {

    allTelevisionsArray.map((tv) => {

        return <article className="all-televisions-article" key={tv.type}>
            <span className="tv-image">
            <img src={tv.sourceImg} alt={tv.name}></img>
            </span>
            <div className="tv-info">
            <p>{tv.name}</p>
            <p>'€ '{tv.price},-</p>
            <p>Hier komen de availableSizes</p>
            <p>En hier komen de options</p>
            </div>

        </article>
    })
}

export default showAllTelevisions;
