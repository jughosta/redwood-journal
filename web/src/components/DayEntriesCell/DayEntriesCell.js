export const QUERY = gql`
  query {
    entries {
      id
      question
      answer
      dayTime
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ entries }) => {
  return JSON.stringify(entries)
}
