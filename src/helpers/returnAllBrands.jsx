function returnAllBrands(allTelevisionsArray) {
    let allBrands = allTelevisionsArray.map((tv ) => {
        return <li key={tv.type}>
            {tv.brand}
        </li>
    });

    return allBrands;
}

export default returnAllBrands;
