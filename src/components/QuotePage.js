import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const QuotePage = () => {

  const [quotes, setQuotes] = useState(null)
  const { genre } = useParams()
  console.log(useParams())

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?genre=${genre}&limit=15&page=1`)
      setQuotes(data.data)
      console.log('HERE: ', data)
    }
    getData()
  }, [])

  if (!quotes) return null

  return (
    <div className="border">
      <ul>
        {quotes.map(quote => {
          return (
            <li key={quote._id}>
              <p className="list-quote-text">{quote.quoteText}</p>
              <p className="list-quote-author">~ {quote.quoteAuthor}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )

}

export default QuotePage