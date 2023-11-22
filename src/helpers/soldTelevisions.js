

function soldTelevisions(inventoryArray) {
let totalSold = 0
    for (let i = 0; i < inventoryArray.length; i++) {
        totalSold = totalSold + inventoryArray[i].sold;
    }
    return totalSold
}
export default soldTelevisions;