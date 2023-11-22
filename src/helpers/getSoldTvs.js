import React from "react";

function getSoldTvs(inventory) {
    const tvsSold = inventory.filter((tv) => { return tv.originalStock === tv.sold })
    console.log(tvsSold)
}

export default getSoldTvs