import Entry from 'src/components/Entry/Entry'

export const QUERY = gql`
  query getDayEntries($day: String!) {
    entries: dayEntries(day: $day) {
      id
      question
      answer
      dayTime
    }
  }
`

export const Loading = () => (
  <div className="text-gray-500 text-center">Loading...</div>
)

export const Empty = () => (
  <div className="text-gray-500 text-center">¯\_(ツ)_/¯</div>
)

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ entries }) => {
  const morningEntries = entries.filter((e) => e.dayTime === 'MORNING')
  const eveningEntries = entries.filter((e) => e.dayTime === 'EVENING')

  return (
    <section>
      <h2 className="mb-2 text-gray-500">Morning</h2>
      <ul>
        {morningEntries.map((entry) => (
          <li key={entry.id}>
            <Entry entry={entry} />
          </li>
        ))}
      </ul>
      <h2 className="mt-3 mb-2 text-gray-500">Evening</h2>
      <ul>
        {eveningEntries.map((entry) => (
          <li key={entry.id}>
            <Entry entry={entry} />
          </li>
        ))}
      </ul>
    </section>
  )
}
