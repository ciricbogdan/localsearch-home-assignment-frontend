import './App.css';
import { useState } from 'react'
import Footer from './components/Footer'
import PlaceSearch from './components/PlaceSearch'
import Place from './components/Place'


function App() {

  const [place, setPlace] = useState(null)

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8080/places/${id}`)
    const data = await res.json()

    return data
  }

  const onSearch = async (id) => {

    const res = await fetchTask(id)

    if (!res.data) {
      alert("Not found")
      return
    }

    setPlace(res.data)
  }

  return (
    <div className="container">
      <h1> Localsearch Home Assignment</h1>
      <PlaceSearch search={onSearch} />
      {!!place && 
        <Place place={place}/>
      }
      <Footer />
    </div>
  );
}

export default App;
