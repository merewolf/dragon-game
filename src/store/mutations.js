export default {
  SET_GAME: (state, payload) => {
    state.game = payload;
  },

  UPDATE_GAME: (state, payload) => {
    state.game = Object.assign(state.game, payload);
  },

  SET_MESSAGES: (state, payload) => {
    state.messages = payload;
  },

  SET_SHOP: (state, payload) => {
    state.shop = payload;
  },
};
