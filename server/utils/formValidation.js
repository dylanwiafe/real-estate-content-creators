const validInventory = (possibleInventory) => {
  const { quantity, ...rest } = possibleInventory;
  const invalid = [];

  Object.entries(rest).forEach(([key, value]) => {
    if (!validTextForm(value)) {
      invalid.push(key);
    }
  });
  if (!Number(quantity) && quantity !== 0) {
    invalid.push("quantity");
  }

  return invalid;
};
