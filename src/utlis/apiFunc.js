export const Ajax = async (url, token, body, method) => {
  try {
    const response = await fetch(url, {
      method: method ? method : "get",
      headers: {
        "content-type": "application/json",
        ...(token && { authorization: token }),
      },
      ...(body && { body }),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const updateItemQuantity = async (productId, changeType, token) => {
  return await Ajax(
    `/api/user/cart/${productId}`,
    token,
    JSON.stringify({ action: { type: changeType } }),
    "post"
  );
};
export const deleteItem = async (productId, token) => {
  return await Ajax(`/api/user/cart/${productId}`, token, null, "DELETE");
};
