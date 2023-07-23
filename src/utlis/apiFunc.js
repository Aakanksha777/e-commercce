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
