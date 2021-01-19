const queryParameters = (query) => ({
  variables: {
    query: query,
    first: 4,
  },
});

export default queryParameters;
