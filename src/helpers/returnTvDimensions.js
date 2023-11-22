function returnTvDimensions(dimensionsArray) {
    let tvdimensions = '';
    for (let i = 0; i < dimensionsArray.length; i++) {
       const sizeInInch = dimensionsArray[i];
       const sizeInCm = Math.round(dimensionsArray[i] * 2.54);

       tvdimensions = tvdimensions + sizeInInch + ' inch ' + sizeInCm + ' cm ';

        if (i < dimensionsArray.length - 1) {
            tvdimensions = tvdimensions +  ' - ';
        }
    }

    return tvdimensions

}
export default returnTvDimensions;