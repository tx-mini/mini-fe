import axios from "axios";

export function getListBook(openid) {
  // 暂时是123
  return axios.get(`/mini/listBook/123`).then(res => {
    return res.data;
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

export function getShare(note_id) {
  return axios.get(`/mini/share/${note_id}`).then(res => res.data);
}
