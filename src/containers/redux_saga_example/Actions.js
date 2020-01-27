export const getNews = value => ({
  type: "GET_NEWS"
});

export const getInput = value => ({
  type: "GET_INPUT",
  value: value
});

export const getNewsReceived = value => ({
  type: "NEWS_RECEIVED"
});
