import { useState, useRef, useMemo } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const [query, setQuery] = useState('')
  // const [filteredItems, setFilteredItems] = useState([])
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => item.toLowerCase().startsWith(query.toLowerCase()));

  }, [items, query]);

  const onSubmit = (e) => {
    e.preventDefault()

    const value = inputRef.current.value
    if (value === '') return;
    setItems(prev => {
      return [...prev, value]
    })
    // setFilteredItems(prev => {
    //   return [...prev, value]
    // })
    inputRef.current.value = ''
  }

  // const onChange = (e) => {
  //   const value = e.target.value
  //   setFilteredItems(items.filter(item => item.toLowerCase().includes(value.toLowerCase())))
  // }

  return (
    <>
      search:
      <input value={query} onChange={e => setQuery(e.target.value)} type="search" />
      <br />
      <br />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button type='submit'>Add</button>
      </form>
      <h3>Items:</h3>
      {
        filteredItems.map(item => {
          return <div>{item}</div>
        })
      }
    </>
  )
}

export default App
