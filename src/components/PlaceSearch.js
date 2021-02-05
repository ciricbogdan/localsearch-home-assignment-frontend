import { useState } from 'react'

const PlaceSearch = ({ search }) => {

    const [id, setID] = useState('')

    const onSubmit = (e) => {
        
        e.preventDefault()

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

            <input type='submit' value='Search' className='btn btn-block' />
        </form>
    )
}

export default PlaceSearch
