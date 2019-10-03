export const findByTestAttribute = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}

export const intToString = value => {
    const num = Number(value);
    if (isNaN(num)) return value;
    const suffixes = ["", "k", "m", "b","t"];
    const suffixNum = Math.floor(("" + num).length / 3);
    const shortValue = parseFloat((suffixNum !== 0 ? (num / Math.pow(1000, suffixNum)) : num).toPrecision(2));

    return shortValue + " " + suffixes[suffixNum];
}

export const getFontValues = value => {
    let fontSize = 20,
        fontWeight = 300;

    while(value > 100000) {
        value /= 100;
        fontSize += 4;
        fontWeight += 100;
    }

    return { fontSize, fontWeight };
}



