import React from "react";
import returnTvDimensions from "./returnTvDimensions.js";
import returnBestSellingTv from "./returnBestSellingTv.js";
import returnTvPrice from "./returnTvPrice.js";

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
            <p>[check-icon] wifi [not-icon] speech [check-icon] hdr [check-icon] bluetooth [not-icon] ambilight</p>
            </div>
        </article> )
    });
    return allTelevisions;
}

export default showAllTelevisions;
