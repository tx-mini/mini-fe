import axios from "axios";
import { Form } from "../../node_modules/antd";

export function getListBook(openid) {
  // 暂时是123
  return axios.get(`/mini/listBook/123`).then(res => {
    return res.data;
  });
}

export function getNoteList(is_rubbish, book_id, is_imp) {
  const formData = new FormData();
  formData.append("openid", localStorage.getItem("openid") || '1');
  formData.append("is_rubbish", is_rubbish);
  formData.append("book_id", book_id);
  formData.append("is_imp", is_imp)

  return axios.post("/mini/listNote", formData).then(res => {
    console.log(res)
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

export function login(nick_name){
  const form = new FormData()
  form.append("nick_name",nick_name	)
  return axios.post({method:"POST",url:"/mini/login",data:form})
}