export const schema = gql`
  enum DayTime {
    MORNING
    EVENING
  }

  type Entry {
    id: String!
    question: String!
    answer: String!
    dayTime: DayTime!
    day: String!
    userId: String!
  }

  type Query {
    entries(userId: String!, day: String!): [Entry!]!
    entry(id: String!): Entry
  }

  input EntryInput {
    question: String!
    answer: String!
    dayTime: DayTime!
    day: String!
    userId: String!
  }

  type Mutation {
    createEntry(input: EntryInput!): Entry
    updateEntry(id: String!, input: EntryInput!): Entry
    deleteEntry(id: String!): Entry
  }
`
