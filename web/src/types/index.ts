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
  userId: string
  isDraft?: boolean
}

export type EntriesMapByDayTime = {
  [DayTime.MORNING]: Entry[]
  [DayTime.EVENING]: Entry[]
}

export type GraphQLError = {
  message: string
}
