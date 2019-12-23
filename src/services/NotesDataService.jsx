import axios from "axios";

const NOTES_API_URL = "http://localhost:8080";

class NotesDataService {
  getAllNotes = () => {
    return axios.get(`${NOTES_API_URL}/getAllNotes`);
  };
  getAllUserFroshare = () => {
    return axios.get(`${NOTES_API_URL}/share`);
  };
  retriveAllNotes = userName => {
    console.log(`${NOTES_API_URL}/notes${userName}`);
    return axios.get(`${NOTES_API_URL}/mynotes/${userName}`);
  };
  deleteNotesinService = (id, username) => {
    return axios.delete(`${NOTES_API_URL}/delete/${id}/${username}`);
  };
  searchById = id => {
    return axios.get(`${NOTES_API_URL}/get/${id}`);
  };
  signup = obj => {
    console.log(obj);
    return axios.post(`${NOTES_API_URL}/signup/`, obj);
  };
  signin = (name, password) => {
    console.log(name + "-2-" + password);
    return axios.get(`${NOTES_API_URL}/signin/${name}/${password}`);
  };
  createNote = obj => {
    console.log(obj);
    return axios.post(`${NOTES_API_URL}/createNote/`, obj);
  };
  updateNote = obj => {
    console.log(obj);
    return axios.put(`${NOTES_API_URL}/update/`, obj);
  };
  updateNotemain = obj => {
    console.log(obj);
    return axios.put(`${NOTES_API_URL}/updatemain/`, obj);
  };
  sendsharedata = (obj, id, title, uname) => {
    console.log(obj + "-" + id + "-" + title + "==" + uname);
    return axios.put(
      `${NOTES_API_URL}/sharenote/${id}/${title}/${uname}/`,
      obj
    );
  };
  getNotification = uname => {
    console.log(uname);
    return axios.get(`${NOTES_API_URL}/notification/${uname}`);
  };
  getViewNoti = (id, username, ogusername) => {
    return axios.get(
      `${NOTES_API_URL}/viewnote/${id}/${username}/${ogusername}`
    );
  };

  updateContribution = (obj, id, uname) => {
    console.log(obj + "<>" + id + "<>" + uname);
    return axios.put(`${NOTES_API_URL}/updatecontribute/${id}/${uname}/`, obj);
  };
}

export default new NotesDataService();
