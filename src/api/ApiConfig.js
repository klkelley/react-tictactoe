let backendHost; 

const hostname = window && window.location && window.location.hostname;

if(hostname === 'ttt.karakelley.rocks') {
  backendHost = 'https://java-ttt.herokuapp.com';
} else {
  backendHost = 'http://localhost:5000';
}

export const API_ROOT = `${backendHost}`;