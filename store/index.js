export const state = () => ({
  trainings: [],
  blogs: [],
  cart: []
});

export const mutations = {
  setTrainings(state, val) {
    state.trainings = val;
  },
  setBlogs(state, val) {
    state.blogs = val;
  },
  setCart(state, val) {
    state.cart = val;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { $axios }) {
    try {
      const { data: trainings } = await $axios.get(
        "/trainings?_sort=createdAt:desc"
      );
      const { data: blogs } = await $axios.get("/blogs?_sort=createdAt:desc");
      commit("setBlogs", blogs);
      return commit("setTrainings", trainings);
    } catch (err) {
      console.log(err);
    }
  }
};
