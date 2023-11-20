import React from "react";
import returnTvDimensions from "./returnTvDimensions.js";
import returnBestSellingTv from "./returnBestSellingTv.js";
import returnTvPrice from "./returnTvPrice.js";
import returnTvOptions from "./returnTvOptions.jsx";

function showAllTelevisions(allTelevisionsArray) {

    let allTelevisions = allTelevisionsArray.map((tv ) => {
        return (
            <article className="tv-article" key={tv.type}>
            <span className="tv-image">
            <img src={tv.sourceImg} alt={tv.name}></img>
            </span>
            <div className="tv-info">
            <p className="tv-name">{returnBestSellingTv(tv)}</p>
                <p className="tv-price">{returnTvPrice(tv.price)}</p>
                <p className="tv-dimensions">{returnTvDimensions(tv.availableSizes)}</p>
            <p className="tv-options">{returnTvOptions(tv.options)}</p>
            </div>
        </article> )
    });
    return allTelevisions;
}

export default showAllTelevisions;
