import * as t from "../types";

export const setInfo = (name) => (dispatch) =>
  dispatch({
    type: t.SET_NAME,
    payload: name,
  });

export const signOut = () => (dispatch) => {
  localStorage.removeItem("user_info");
  dispatch({
    type: t.SIGN_OUT,
  });
};

export const restore = (data) => (dispatch) =>
  dispatch({
    type: t.REGISTER,
    payload: data,
  });

export const userSignUp =
  ({ name, age, email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: t.LOADING,
        payload: true,
      });
      const apiResponse = await axios.post(
        process.env.API_ADDRESS + `/api/auth/register`,
        { name, age, email, password }
      );

      if (apiResponse.data.success) {
        localStorage.setItem(
          "user_info",
          JSON.stringify(apiResponse.data.user)
        );
        dispatch({
          type: t.REGISTER,
          payload: apiResponse.data.user,
        });
      }
    } catch (error) {
      dispatch({
        type: t.LOADING,
        payload: false,
      });
      dispatch({
        type: t.ERROR,
        payload: error.response.data.error,
      });
    }
  };

export const userSignIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: t.LOADING,
        payload: true,
      });
      const apiResponse = await axios.post(
        process.env.API_ADDRESS + `/api/auth/login`,
        { email, password }
      );

      if (apiResponse.data.success) {
        localStorage.setItem(
          "user_info",
          JSON.stringify(apiResponse.data.user)
        );
        dispatch({
          type: t.REGISTER,
          payload: apiResponse.data.user,
        });
      }
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: t.LOADING,
        payload: false,
      });
      dispatch({
        type: t.ERROR,
        payload: error.response.data.error,
      });
    }
  };

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const userData = JSON.parse(localStorage.getItem("user_info"));
    const email = userData ? userData.email : "";

    const apiResponse = await request.post(
      process.env.API_ADDRESS + "/api/todo/my",
      { email }
    );

    dispatch({
      type: t.GET_TODOS,
      payload: apiResponse.data.todos,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error,
    });
  }
};

export const createTodo = (title) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const userData = JSON.parse(localStorage.getItem("user_info"));
    const email = userData ? userData.email : "";

    const apiResponse = await request.post(
      process.env.API_ADDRESS + "/api/todo/new",
      { title, email, done: false }
    );

    dispatch({
      type: t.CREATE_TODO,
      payload: apiResponse.data.todo,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error,
    });
  }
};

export const updateTodo = (id, title, done) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const userData = JSON.parse(localStorage.getItem("user_info"));
    const email = userData ? userData.email : "";

    const apiResponse = await request.post(
      process.env.API_ADDRESS + "/api/todo/update",
      { id, title, email, done }
    );

    dispatch({
      type: t.UPDATE_TODOS,
      payload: apiResponse.data.todos,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error,
    });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const userData = JSON.parse(localStorage.getItem("user_info"));
    const email = userData ? userData.email : "";

    const apiResponse = await request.post(
      process.env.API_ADDRESS + "/api/todo/delete",
      { id, email }
    );

    dispatch({
      type: t.DELETE_TODO,
      payload: apiResponse.data.todos,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: error.response.data.error,
    });
  }
};

export const getSegments = () => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const apiResponse = await fetch(t.API + "segments", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    });
    let result = await apiResponse.json();

    dispatch({
      type: t.GET_SEGMENTS,
      payload: result,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: "Could not fetch data",
    });
  }
};

export const getOffers = () => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });

    const apiResponse = await fetch(t.API + "offers/for-main-page", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    });
    let result = await apiResponse.json();

    dispatch({
      type: t.GET_OFFERS,
      payload: result,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: "Could not fetch data",
    });
  }
};

export const getShopOffers = (id) => async (dispatch) => {
  try {
    dispatch({
      type: t.LOADING,
      payload: true,
    });
    console.log(id);
    const apiResponse = await fetch(t.API + "offers/for-shop-page/" + id, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
      }),
    });
    let result = await apiResponse.json();

    dispatch({
      type: t.GET_OFFERS,
      payload: result,
    });
    dispatch({
      type: t.LOADING,
      payload: false,
    });
  } catch (error) {
    dispatch({
      type: t.LOADING,
      payload: false,
    });
    dispatch({
      type: t.ERROR,
      payload: "Could not fetch data",
    });
  }
};
