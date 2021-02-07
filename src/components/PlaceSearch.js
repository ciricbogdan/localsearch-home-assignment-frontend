import {useState} from 'react'

// PlaceSearch search is a component holding a form that will perform a search, which is passed as a prop,
// with the inputted id
const PlaceSearch = ({search}) => {

    // stateful id var
    const [id, setID] = useState('')

    // on form submit action
    const onSubmit = (e) => {

        e.preventDefault()

        if (id === '') {
            alert("Place ID is mandatory")
            return
        }

        search(id)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Search for a place</label>
                <input
                    type='text'
                    placeholder='Search'
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                />
            </div>

            <input type='submit' value='Search' className='btn btn-block'/>
        </form>
    )
}

export default PlaceSearch
