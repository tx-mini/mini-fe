async function recognize(blob) {
  const url = "http://120.78.82.23:8848/OCR";

  const response = await fetch(url, {
    body: blob,
    headers: {
      "content-type": "multipart/form-data"
    },
    method: "POST"
  });

  return response.json().then(json => {
    return JSON.parse(json).data.items;
  });
}

export default recognize;
