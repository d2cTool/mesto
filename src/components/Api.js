class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  postCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      headers: this._headers,
      method: "PUT",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  removeLike(id) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      headers: this._headers,
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  patchUserInfo(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }

  patchUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  }
}

export const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-33",
  headers: {
    authorization: "20f1beb6-6801-4a67-a1e2-4a17380dc299",
    "Content-Type": "application/json",
  },
});
