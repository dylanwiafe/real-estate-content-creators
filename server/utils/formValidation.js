
const validInventory = (possibleInventory) => {
    const { quantity, ...rest } = possibleInventory;
    const invalid = [];

    Object.entries(rest).forEach(([key, value]) => {
        if (!validTextForm(value)) {
            console.log("invalid: " + key);
            invalid.push(key);
        }
    });
    if (!Number(quantity) && quantity !== 0) {
        console.log("invalid: quantity");
        invalid.push("quantity");
    }

    return invalid;
};