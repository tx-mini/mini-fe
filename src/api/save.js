import axios from "axios";
export function getListBook() {
  // 暂时是123
  const formData = new FormData();
  formData.append(
    "openid",
    window.localStorage.getItem("openid") || "83C38B2ADFA6400A6B18F09539FA29D3"
  );
  return axios.post(`/mini/listBook`, formData).then(res => {
    return res.data;
  });
}

export function getNoteList(is_rubbish, book_id, is_imp) {
  const formData = new FormData();
  formData.append(
    "openid",
    localStorage.getItem("openid") || "83C38B2ADFA6400A6B18F09539FA29D3"
  );
  formData.append("is_rubbish", is_rubbish);
  formData.append("book_id", book_id);
  formData.append("is_imp", is_imp);

  return axios.post("/mini/listNote", formData).then(res => {
    return res.data;
  });
}

export function getNoteContent(note_id) {
  const formData = new FormData();
  formData.append("openid", window.localStorage.getItem("openid"));
  formData.append("note_id", note_id);
  return axios.post(`/mini/getNote`, formData).then(res => res.data);
}

export function removeNote(id) {
  return axios.get(`/api/mock/13512/removeNote/${id}`).then(res => res.data);
}

export function getShare(note_id) {
  return axios.get(`/mini/share/${note_id}`).then(res => res.data);
}

export function login(nick_name) {
  const form = new FormData();
  form.append("nick_name", nick_name);
  return axios.post("/mini/login", form).then(res => res.data);
}

export function createNote({ book_id, name, content, is_imp = 0 }) {
  const form = new FormData();
  form.append("openid", window.localStorage.getItem("openid"));
  form.append("book_id", book_id);
  form.append("name", name);
  form.append("content", content);
  form.append("is_imp", is_imp);
  return axios.post("/mini/createNote", form).then(res => res.data);
}

export function modNote(content) {
  const form = new FormData();
  form.append("openid", window.localStorage.getItem("openid"));
  for (let [key, value] of Object.entries(content)) {
    if (key === "book_ref") {
      key = "book_id";
    }
    form.append(key, value);
  }
  return axios.post("/mini/modNote", form).then(res => res.data);
}
