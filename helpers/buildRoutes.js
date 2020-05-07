const axios = require("axios");

async function dynamicRoutes() {
  const trainings = await axios.get(
    `https://bornforgymnastics-server.herokuapp.com/trainings`
  );
  // const blogs = await axios.get(
  //   `https://bornforgymnastics.herokuapp.com/api/blogs`
  // );
  // const blogs = await axios.get(`${base}/blogs`);
  const [r1, r2] = await Promise.all([
    trainings.data.map(training => {
      return {
        route: `/trainings/${training.slug}`,
        payload: training
      };
    }),
    {
      route: `/trainings`,
      payload: trainings.data
    }
  ]);

  return [...r1, r2];
}

module.exports = dynamicRoutes;
