const Entry = ({ entry }) => {
  return (
    <section className="bg-white px-3 py-2">
      <div className="text-gray-800 font-semibold">{entry.question}</div>
      <div className="text-gray-800">{entry.answer}</div>
    </section>
  )
}

export default Entry
