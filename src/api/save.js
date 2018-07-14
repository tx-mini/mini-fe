import axios from "axios";

export function getCategories() {
  return axios.get("/mock/13512/getCategories/" + 1).then(res => {
    return res.data.result;
  });
}

export function getNoteList(categoryId) {
  return axios.get("/api/mock/13512/getNoteList/" + categoryId).then(res => {
    return res.data.result;
  });
}

export function getNoteContent(contentId) {
  return axios
    .get(`/api/mock/13512/getNoteContent/${contentId}`)
    .then(res => res.data.result);
}

export function removeNote(id) {
  return axios.get(`/api/mock/13512/removeNote/${id}`).then(res => res.data);
}

export function login(nick) {
  // 告诉后台nick
}

export function save(id) {
  const form = new FormData();
  form.append("a", "b");
  return axios({
    method: "post",
    url: "http://192.168.191.2/note/index.php/mini/createNote",
    data: form
  });
}
