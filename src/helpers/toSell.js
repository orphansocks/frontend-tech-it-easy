import soldTelevisions from "./soldTelevisions.js";
import originalStock from "./originalStock.js";
import {inventory} from "../constants/inventory.js";

function toSell() {
    let toSell = originalStock(inventory) - soldTelevisions(inventory)
    return toSell
}
export default toSell();