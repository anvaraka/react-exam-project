import { useEffect, useState } from 'react'
import '../App.css'
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { callToAPi } from './homeSlice'
import Pagination from './Pagination';
import GridItems from './GridItems';
import { Grid, Typography, CircularProgress, Input, Button } from '@mui/material';
import styled from 'styled-components';
import Search from './Search';

const SpinnerWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px;
`


function Master() {
    const [isLoading, setIsLoading] = useState(true)
    const [inputVal, setInputVal] = useState("")
    const dispatch = useDispatch()

    const allData = useSelector((state) => state.disney)

    const load = () => {
        if (allData !== []) {
            setIsLoading(false)
        } else {
            setIsLoading(true)
        }
    }
    setTimeout(load, 1000);



    let dataLimit = 10

    const filteredData = allData.filter(el => el.name.toLowerCase().includes(inputVal))
    const Perpage = Math.ceil(filteredData.length / dataLimit)
    console.log(filteredData)

    useEffect(() => {
        dispatch(callToAPi())
    }, [])

    return (
        isLoading ? <SpinnerWrapper> <Typography mb={2}>Data is loading</Typography>
            <CircularProgress />
        </SpinnerWrapper > :
            <>
                <h1 className='title'>Disney Characters </h1>
                <p className='header'>We will see some of the Disney Characters below and some information about them like list of moview, tv-shows they participated and so on</p>

                <Search setInputVal={setInputVal} />


                {filteredData.length > 0 ? (
                    <>

                        <Pagination
                            allData={filteredData}
                            inputVal={inputVal}
                            RenderComponent={GridItems}
                            title="Cards"
                            pageLimit={Perpage}
                            dataLimit={dataLimit}
                        />
                    </>
                ) : <></>}

            </>
    )
}

export default Master


