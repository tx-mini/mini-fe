import axios from "axios";

export function getCategories() {
  return axios
    .get("http://yapi.demo.qunar.com/mock/13512/getCategories/" + 1)
    .then(res => {
      return res.data.result;
    });
}

export function getNoteList(categoryId) {
  return axios
    .get("http://yapi.demo.qunar.com/mock/13512/getNoteList/" + categoryId)
    .then(res => {
      return res.data.result;
    });
}

export function getNoteContent(contentId) {
  return axios
    .get(`http://yapi.demo.qunar.com/mock/13512/getNoteContent/${contentId}`)
    .then(res => res.data.result);
}

export function removeNote(id) {
  return axios
    .get(`http://yapi.demo.qunar.com/mock/13512/removeNote/${id}`)
    .then(res => res.data);
}

export function login(nick) {
  // 告诉后台nick
}

export function save(id) {
  return axios({
    method: "post",
    url: "/createNote",
    data: {
      openid: "111",
      book_ref: "xxssdadadxx",
      imp_mark: 0
    }
  });
}
