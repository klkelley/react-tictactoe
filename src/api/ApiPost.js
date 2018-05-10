import {API_ROOT} from "./ApiConfig";
import axios from 'axios';

export function postMove(updateGameState, data) {
  axios.post(API_ROOT+ '/move', data)
    .then(response => {
      updateGameState(response.data);
    }).catch(error => {
    console.log(error);
  })
}