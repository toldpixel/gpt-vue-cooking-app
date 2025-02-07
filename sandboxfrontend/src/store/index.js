import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      sharedData: null
    };
  },
  mutations: {
    setSharedData(state, data) {
      state.sharedData = data;
    }
  }
});

export default store;