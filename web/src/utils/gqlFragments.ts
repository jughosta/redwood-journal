import gql from 'graphql-tag'

export const ENTRY_FIELDS_FRAGMENT = gql`
  fragment EntryFields on Entry {
    id
    question
    answer
    dayTime
    day
    userId
  }
`
