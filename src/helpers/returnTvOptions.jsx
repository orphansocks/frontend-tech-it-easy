function returnTvOptions(optionsArray) {
    let tvOptions = optionsArray.map((option) => {
        if (option.applicable === true) {
            return <li><img src="src/assets/check.png" alt="icon-check" className="option-icon"/> {option.name}</li>
        }
        else {
            return <li><img src="src/assets/minus.png" alt="icon-no" className="option-icon"/> {option.name}</li>
        };

    });

    return tvOptions
}

export default returnTvOptions;

