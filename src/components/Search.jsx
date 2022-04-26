import { Input } from '@mui/material'
import { debounce } from 'lodash'


function Search({ setInputVal }) {

    const handleTheInputChange = debounce((value) => {
        const string = value.toLowerCase()
        setInputVal(string)
    }, 500)
    return (
        <Input style={{ fontSize: '22px' }} onChange={(e) => handleTheInputChange(e.target.value)} className='input' icon='search'
            placeholder='Search...'
        />

    )
}

export default Search