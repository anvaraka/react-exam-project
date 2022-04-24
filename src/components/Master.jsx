import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callToAPi } from './homeSlice'

function Master() {
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.disney)

    useEffect(() => {
        dispatch(callToAPi())
    }, [])

    console.log(allData)



    return (
        <>
            <h1>Disney Characters</h1>
            {allData.map(el => <div key={el._id}>
                <img src={el.imageUrl} />
            </div>)}
        </>
    )
}

export default Master