import { DayTime, EntriesMapByDayTime, Entry } from '../types'

const QUESTION_LIST_MORNING = [
  "Today's message to myself",
  'One thing I am excited about today is...',
  'What person I want to be today and why?',
  'Someone who needs my best performance today?',
  'A situation that can stress me out today could be...',
  'How can I deal with stress best?',
  'Someone to thank today or to show a sign of appreciation?',
  'Someone to connect with today and why?',
  'A bold action I could take today is...',
  'How can I demonstrate excellence or real value?',
  'Definition of success for today is...',
  'Top 3 goals for today',
]

const QUESTION_LIST_EVENING = [
  'I am grateful for...',
  'I achieved...',
  'I handled well...',
  'I realized today...',
  'I learnt today...',
  'I felt more connected with...',
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
