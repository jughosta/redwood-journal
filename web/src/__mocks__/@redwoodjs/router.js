module.exports = {
  Link: () => {
    return null
  },
  routes: {
    entries: () => '/test-path',
  },
  useParams: () => {
    return {
      day: '2020-03-19',
    }
  },
}
