import { DayTime, EntriesMapByDayTime, Entry } from '../types'

const QUESTION_LIST_MORNING = [
  'Top 3 goals for today',
  'One thing I am excited about today is...',
  'How can I deal with stress best?',
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

const prepareEntriesByDayTime = (
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

      return {
        id: `draft-entry-${Math.random()}`,
        question: q,
        answer: '',
        dayTime: dayTime,
        day: draftDay,
        isDraft: true,
      }
    })
    .filter(Boolean),
  ...entries.filter(
    (e) =>
      e.dayTime === dayTime &&
      !QuestionsMapByDayTime[dayTime].includes(e.question)
  ),
]

export const groupEntriesByDayTime = (
  entries: Entry[],
  includeDrafts = false,
  draftDay?: string
): EntriesMapByDayTime => ({
  [DayTime.MORNING]: prepareEntriesByDayTime(
    DayTime.MORNING,
    entries,
    includeDrafts,
    draftDay
  ),
  [DayTime.EVENING]: prepareEntriesByDayTime(
    DayTime.EVENING,
    entries,
    includeDrafts,
    draftDay
  ),
})
