export enum DayTime {
  MORNING = 'MORNING',
  EVENING = 'EVENING',
}

export type Entry = {
  id: string
  question: string
  answer: string
  dayTime: DayTime
  day: string
}

export type GraphQLError = {
  message: string
}
