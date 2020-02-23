const USER_AUTH_TOKEN = 'data_statistics_user_auth_token';

export const state = () => ({
  userAuthToken: localStorage.getItem(USER_AUTH_TOKEN) ||
    sessionStorage.getItem(USER_AUTH_TOKEN) || null
});

export const getters = {
  /**
   *
   * @param state
   * @returns {boolean}
   * @constructor
   */
  USER_IS_LOGGED: state => state.userAuthToken !== null,

  /**
   *
   * @param state
   * @returns {string|null}
   * @constructor
   */
  USER_AUTH_TOKEN: state => {
    if (state.userAuthToken) {
      let deSerializedToken = JSON.parse(state.userAuthToken) || null;
      if (deSerializedToken) {
        return deSerializedToken.type + ' ' + deSerializedToken.token;
      }
    }
    return null;
  }
};

export const mutations = {
  /**
   *
   * @param store
   * @param data
   * @constructor
   */
  SET_USER_AUTH_TOKEN: (store, data) => {
    let serializedToken = JSON.stringify(data.token);
    let storage = sessionStorage;
    if (data.persist) {
      storage = localStorage;
    }
    storage.setItem(USER_AUTH_TOKEN, serializedToken);
    store.userAuthToken = serializedToken;
  },

  /**
   *
   * @param store
   * @constructor
   */
  LOGOUT: (store) => {
    store.userAuthToken = null;
    sessionStorage.removeItem(USER_AUTH_TOKEN);
    localStorage.removeItem(USER_AUTH_TOKEN);
  },
};

export const actions = {
  async LOGIN({commit}, {persist}) {
    try {
      //тут запрос апи на токен с сервера
      let token = '12345678asfzbsrhfh';
      commit('SET_USER_AUTH_TOKEN', {token: token, persist: persist});

    } catch (e) {
      commit('LOGOUT');
      throw e;
    }
  }
};
