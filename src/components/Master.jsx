import { useEffect, useState } from 'react'
import '../App.css'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { callToAPi } from './homeSlice'
import Pagination from './Pagination';
import GridItems from './GridItems';

function Master() {

    const dispatch = useDispatch()
    const allData = useSelector((state) => state.disney)

    const Perpage = Math.ceil(allData.length / 11)

    useEffect(() => {
        dispatch(callToAPi())
    }, [])

    return (
        <>
            <h1 className='title'>Disney Characters </h1>
            <p className='header'>We will see some of the Disney Characters below and some information about them like list of moview, tv-shows they participated and etc</p>

            {allData.length > 0 ? (
                <>
                    <Pagination
                        allData={allData}
                        RenderComponent={GridItems}
                        title="Pages"
                        pageLimit={Perpage}
                        dataLimit={11}
                    />
                </>
            ) : <></>}

        </>
    )
}

export default Master


