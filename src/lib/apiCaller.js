export function fetchPosts() {
  var result = fetch("https://localhost:7049/api/post")
    .then((resp) => resp.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      throw new Exception(error.message);
    });
  return result;
}
