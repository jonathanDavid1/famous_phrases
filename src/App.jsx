import { useState } from 'react'
import './App.css'
import quotes from './db/quote.json'
import { getRandom } from './utils/getRandom'
import QuoteBox from './components/QuoteBox.jsx'
const listBg = ['bg1', 'bg2','bg3','bg4']
function App() {
  const [quote, setQuote] = useState(getRandom(quotes))
  console.log(quote)
  const [currentBg, setCurrentBg ] = useState(getRandom(listBg))  
  const handleChangeQuote = () => {
    setQuote(getRandom(quotes))
    setCurrentBg(getRandom(listBg))
  }
  return (
    <main className={`app ${currentBg}`}>
    <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote}/>
    </main>
  )
}

export default App
