import { DayTime, EntriesMapByDayTime, Entry } from '../types'

const QUESTION_LIST_MORNING = [
  'Top 3 goals for today',
  'One thing I am excited about today is...',
  'How to deal with a stressful situation?',
  'Someone who needs me today is...',
  'Someone to connect with today and why?',
  'A bold action I could take today is...',
]

const QUESTION_LIST_EVENING = [
  'I am grateful for...',
  'I achieved or handled well...',
  'I realized or learnt today...',
]

const QuestionsMapByDayTime = {
  [DayTime.MORNING]: QUESTION_LIST_MORNING,
  [DayTime.EVENING]: QUESTION_LIST_EVENING,
}

export const generateDraftEntry = (
  userId: string,
  day: string,
  dayTime: DayTime,
  question: string
) => ({
  id: `draft-entry-${Math.random()}`,
  question,
  answer: '',
  dayTime,
  day,
  isDraft: true,
  userId,
})

const prepareEntriesByDayTime = (
  userId: string,
  dayTime: DayTime,
  entries: Entry[],
  includeDrafts = false,
  draftDay?: string
): Entry[] => [
  ...QuestionsMapByDayTime[dayTime]
    .map((q) => {
      const entry = entries.find((e) => e.question === q)
      if (entry) {
        return entry
      }
      if (!includeDrafts) {
        return null
      }

      return generateDraftEntry(userId, draftDay, dayTime, q)
    })
    .filter(Boolean),
  ...entries.filter(
    (e) =>
      e.dayTime === dayTime &&
      !QuestionsMapByDayTime[dayTime].includes(e.question)
  ),
]

export const groupEntriesByDayTime = (
  userId: string,
  entries: Entry[],
  includeDrafts = false,
  draftDay?: string
): EntriesMapByDayTime => ({
  [DayTime.MORNING]: prepareEntriesByDayTime(
    userId,
    DayTime.MORNING,
    entries,
    includeDrafts,
    draftDay
  ),
  [DayTime.EVENING]: prepareEntriesByDayTime(
    userId,
    DayTime.EVENING,
    entries,
    includeDrafts,
    draftDay
  ),
})
