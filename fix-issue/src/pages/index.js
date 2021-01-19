import * as React from "react"
import { useState, useEffect } from "react"

// markup
const IndexPage = () => {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch('https://random-data-api.com/api/bank/random_bank')
    .then(e => e.json())
    .then(e => setData(e))
  }, [])
  
  return (
    <main>
      { JSON.stringify(data) }
    </main>
  )
}

export default IndexPage
