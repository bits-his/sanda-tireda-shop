// require ("dotenv");
import { logout } from "./auth";

// import { useHistory } from 'react-router-dom';
let localEndpoint = 'http://127.0.0.1:42427'
//"http://localhost:4232/api/v1";
// let remoteEndpoint = 'https://land-information-system.herokuapp.com/api';
let remoteEndpoint = "https://yge.wvi.mybluehost.me/test/sanda-server";

export const apiURL =
  // process.env.NODE_ENV === "development" ? 
  localEndpoint 
  // : remoteEndpoint;
let token = localStorage.getItem("@@bits_lis");
token = JSON.parse(token);

export const _postApi = (url, data = [], success = (f) => f, error = (f) => f) => {
  fetch(apiURL + url, {
    method: "POST",
    headers: { "Content-Type": "application/json", authorization: token },
  })
    .then((response) => {
      console.log({ response });
      if (response.status >= 400) {
        error(response);
        if (response.status === 401) {
          window.location = "";
        }
      } else success(response);
    })
    .catch((err) => error(err));
};

export const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  // const { facilityId } = store.getState().auth.user;

  fetch(apiURL + url, {
    method: "GET",
    headers: { "Content-Type": "application/json", authorization: token },
  })
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        console.log("Empty response");
        empty();
      }
    })
    .catch((err) => {
      if (err.status === 401) {
        logout({});
        window.location = "";
      }
      error(err);
    });
};
