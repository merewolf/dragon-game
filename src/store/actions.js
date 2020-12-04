import axios from 'axios';

const URL = 'https://dragonsofmugloar.com/api/v2';

export default {
  setGame: async ({ commit }) => {
    try {
      let result = await axios.post(`${URL}/game/start`);
      console.log(result.data);
      commit('SET_GAME', result.data);
    } catch (error) {
      throw new Error(error);
    }
  },

  setMessages: async ({ commit }, payload) => {
    try {
      let result = await axios.get(`${URL}/${payload}/messages`);
      let messages = result.data;
      messages.forEach(message => {
      if(message.encrypted) {
        message.adId = atob(message.adId)
        message.message = atob(message.message)
        message.probability = atob(message.probability)
      }}
      )

      commit('SET_MESSAGES', messages);
    } catch (error) {
      throw new Error(error);
    }
  },

  setShop: async ({ commit }, payload) => {
    try {
      let result = await axios.get(`${URL}/${payload}/shop`);
      console.log(result.data);
      commit('SET_SHOP', result.data);
    } catch (error) {
      throw new Error(error);
    }
  },

  solveQuest: async ({ commit }, payload) => {
    try {
      let result = await axios.post(
        `${URL}/${payload.gameId}/solve/${payload.adId}`
      );
      let game = {
        gameId: payload.gameId,
        lives: result.data.lives,
        gold: result.data.gold,
        score: result.data.score,
        highScore: result.data.highScore,
        turn: result.data.turn,
      };
      console.log(result.data);
      commit('UPDATE_GAME', game);
      return { message: result.data.message, success: result.data.success };
    } catch (error) {
      throw new Error(error);
    }
  },

  buy: async ({ commit }, payload) => {
    try {
      let result = await axios.post(
        `${URL}/${payload.gameId}/shop/buy/${payload.id}`
      );
      let game = {
        gold: result.data.gold,
        lives: result.data.lives,
        level: result.data.level,
        turn: result.data.turn,
      };
      commit('UPDATE_GAME', game);
      return result.data.shoppingSuccess;
    } catch (error) {
      throw new Error(error);
    }
  },
};
