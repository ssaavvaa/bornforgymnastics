export const state = () => ({
  trainings: []
});

export const mutations = {
  setTrainings(state, val) {
    state.trainings = val;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    try {
      const { data: trainings } = await $axios.get("/trainings");
      return commit("setTrainings", trainings);
    } catch (err) {
      console.log(err);
    }
  }
};
