import './App.css';
import {useState} from 'react'
import Footer from './components/Footer'
import PlaceSearch from './components/PlaceSearch'
import Place from './components/Place'


function App() {

    // stateful place var
    const [place, setPlace] = useState(null)

    // Fetch Task
    const fetchTask = async (id) => {

        const res = await fetch(`${process.env.REACT_APP_API_PLACES_URL}/${id}`)
        const data = await res.json()

        return data
    }

    // method to search for a place by id
    const onSearch = async (id) => {

        const res = await fetchTask(id)

        if (!res.data) {
            switch (res.errorMessage) {
                case 'place not found':
                    alert("Place Not found")
                    break
                default:
                    alert("Unknown error")
                    break
            }
            return
        }

        setPlace(res.data)
    }

    return (
        <div className="container">
            <h1> Localsearch Home Assignment</h1>
            <PlaceSearch search={onSearch}/>
            {/* we don't render the place component if there is no place*/}
            {!!place &&
            <Place place={place}/>
            }
            <Footer/>
        </div>
    );
}

export default App;
