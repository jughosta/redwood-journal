module.exports = {
  Link: () => {
    return null
  },
  routes: {
    dayEntries: () => '/test-path',
  },
  useParams: () => {
    return {
      day: '2020-03-19',
    }
  },
}
