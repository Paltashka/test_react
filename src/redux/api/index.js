const mainApi = "https://jsonplaceholder.typicode.com";

export const getPosts = (data) => {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${mainApi}/posts`, requestOptions).then((response) =>
    response.json()
  );
};

export const getPostComment = (id) => {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${mainApi}/posts/${id}/comments`, requestOptions).then(
    (response) => response.json()
  );
};

export const addPost = (obj) => {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  return fetch(`${mainApi}/posts`, requestOptions).then((response) =>
    response.json()
  );
};
