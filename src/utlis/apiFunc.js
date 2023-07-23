const Ajax = async (url, method, body, token) => {
  try {
    const response = await fetch(url, {
      method: method ? method : "get",
      headers: {
        "content-type": "application/json",
        ...(token && { authorization: token }),
      },
      ...(method && body),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const addProductOnClick = async (token, item, url) => {
  const body = JSON.stringify({ product: item });
  return await Ajax(url, "post", body, token);
};
