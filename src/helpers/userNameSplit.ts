export const userNameSplit = (name: string) => {
    const splitName = name.split(" ");
    return splitName.length > 1 ? `${splitName[0]} ${splitName[1]}` : splitName[0];
}

export const firstTwoLetters = (name: string) => {
    const splitName = userNameSplit(name);
    return splitName
        .split(" ")
        .map((name) => name[0].toUpperCase())
        .join("");
}