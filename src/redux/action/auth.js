import {
  LOADING_SIGNUP,
  SET_USER,
  LOADING_LOGIN,
  SET_AUTH_ERROR,
  LOGOUT,
  STOP_LOADING_APP,
  ERROR_MESSAGE,
} from "./type";
import { apiURL, _postApi } from "./api";
// import { useHistory } from 'react-router-dom';

export function signup(objs = {}, success = (f) => f, error = (f) => f) {
  return (dispatch) => {
    dispatch({ type: LOADING_SIGNUP });
    fetch(`${apiURL}/api/auth/sign-up/dashboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objs),
    })
      .then((raw) => raw.json())
      .then((data) => {
        dispatch({ type: LOADING_SIGNUP });
        if (data.success) {
          dispatch(
            login({email:objs.email,
              password:objs.password},
              (data) => {
                success(data);
                const { user, token } = data;
                dispatch({ type: SET_USER, payload: user });
                if (token) {
                  localStorage.setItem("@@bits_lis", JSON.stringify(token));
                }
              },
              (err) => {
                error(err);
                if (err && err.msg)
                  dispatch({
                    type: SET_AUTH_ERROR,
                    payload: err,
                  });
              }
            )
          );
        } else {
          dispatch({
            type: SET_AUTH_ERROR,
            payload: "Server error, try again.",
          });
        }
      })
      .catch((error) => {
        dispatch({ type: LOADING_SIGNUP });
        console.log({ error });
      });
  };
}

export function login({ email, password }, success, error) {
  return (dispatch) => {
    // dispatch({ type: LOADING_LOGIN });
    fetch(`${apiURL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((raw) => raw.json())
      .then((data) => {
        console.log(data);
        // dispatch({ type: LOADING_LOGIN });
        if (data.success) {
          const { token } = data;
          getUserProfile(token)
            .then((data) => {
              if (data.success) {
                /**
                 * Token is valid
                 * navigate user to dashboard */
                const { user } = data;
                dispatch({ type: SET_USER, payload: user });
                // console.log('got here', user.id);
                if (token) {
                  localStorage.setItem("@@bits_lis", JSON.stringify(token));
                }
                success(data);
                // history("/admin/");
              }
            })
            .catch((err) => {
              error(err);
            });
        } else {
          dispatch({ type: ERROR_MESSAGE, payload: data });
          error(data.error);
          console.log(data);
        }
      })
      .catch((err) => {
        dispatch({ type: LOADING_LOGIN, payload:err });
        // console.log(err)
      });
  };
}

 async function getUserProfile(_token) {
  try {
    // console.log(_token);
    let response = await fetch(`${apiURL}/auth/verify-token`, {
      method: "GET",
      headers: {
        authorization: _token,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    // console.log(error);
    return error;
  }
}

export function init(callback = (f) => f) {
  return (dispatch) => {
    let token = localStorage.getItem("@@bits_lis");
    // dispatch({ type: START_LOADING_APP });
    if (token) {
      token = JSON.parse(token);
      /**
       * Token present
       * verifyToken */
      getUserProfile(token)
        .then((data) => {
          if (data.success) {
            /**
             * Token is valid
             * navigate user to dashboard */
            callback();
            dispatch({ type: STOP_LOADING_APP });
            const { user } = data;
            dispatch({ type: SET_USER, payload: user });

            // history("/admin/");
          } else {
            /**
             * Token is invalid
             * navigate user to auth */
            // dispatch({ type: STOP_LOADING_APP });
            callback();
            // console.log(err)
            localStorage.removeItem("@@bits_lis");
            // history("/");
            // console.log('Token expired');
          }
        })
        .catch((err) => {
          // server error
          // console.log(err);
          dispatch({ type: STOP_LOADING_APP });
        });
    } else {
      /**
       * No token found
       * navigate user to auth page
       */
      callback();
      // history("/");
      // dispatch({ type: STOP_LOADING_APP });
    }
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("@@bits_lis");
    dispatch({ type: LOGOUT });
    // history("/");
  };
}
// export function setToken({ user, token }) {
//   _postApi(
//     "/set-token",
//     { user, token },
//     (done) => {
//       console.log(done);
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
// }
export function getAuthToken({ user }) {
  _postApi(
    "/get-token",
    user,
    (done) => {
      console.log(done);
    },
    (error) => {
      console.error(error);
    }
  );
}