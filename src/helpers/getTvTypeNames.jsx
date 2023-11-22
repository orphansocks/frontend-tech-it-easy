import React from "react";
import {inventory} from "../constants/inventory.js";

function getTvTypeNames(inventory) {

    const tvBrand = inventory.map((tv) => {
        return tv.type;
    })

    console.log(tvBrand)

}

export default getTvTypeNames;