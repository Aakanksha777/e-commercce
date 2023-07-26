export const checkSameAlreadyExist = (list, item) =>
  list.find((ele) => ele.id === item.id);

export const updateQtyLocal = (product, changeType, list) => {
  let flag = false;
  // increasing of decreasing qty property of a product obj inside the array
  let qtyChangedProduct = list.map((ele) => {
    if (ele.id === product.id) {
      changeType === "increment"
        ? (ele.qty += 1)
        : product.qty < 1
        ? (flag = true)
        : (ele.qty -= 1);
    }
    return ele;
  });
  // if flag becomes true, then quanity of that product reached to zero and we have to remove that from array
  flag && (qtyChangedProduct = list.filter((ele) => ele.id !== product.id));
  return qtyChangedProduct;
};
