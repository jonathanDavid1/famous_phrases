import './styles/QuoteBox.css'
const QuoteBox = ({handleChangeQuote, quote}) => {
  return (
    <section  className='quoteBox'>
      <h1 title className = 'title'>Famous Phrases</h1>

      <section className='midleBox'>
        <button className= 'button' onClick={handleChangeQuote}>Show another phrase</button>
        <article>
            <p className='paragraph'>{quote.phrase}</p>
        </article>
      </section>
      <footer className='footer'><h4>Author: {quote.author}</h4></footer>
    </section>
  )
}

export default QuoteBox
