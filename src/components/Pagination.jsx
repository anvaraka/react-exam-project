import '../App.css'
import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'

const PAGE_KEY = 'MY_PAGINATION_KEY'

const getPageNumber = () => {
    if (sessionStorage && parseInt(sessionStorage.getItem(PAGE_KEY)) > 0) {
        return parseInt(sessionStorage.getItem(PAGE_KEY))
    }
    return 1
}


function Pagination({ allData, RenderComponent, title, pageLimit, dataLimit }) {
    const [pages] = useState(Math.round(allData.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(getPageNumber());


    function goToNextPage() {
        sessionStorage.setItem(PAGE_KEY, currentPage + 1)
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        sessionStorage.setItem(PAGE_KEY, currentPage - 1)
        setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        sessionStorage.setItem(PAGE_KEY, pageNumber)
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return allData.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    useEffect(() => {
        window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);

    return (
        <div>
            <h1 className='h1'>{title}</h1>

            <div className="dataContainer">
                <Grid container spacing={2}
                    justifyContent="center">
                    {getPaginatedData().map((d, idx) => (
                        <RenderComponent key={idx} allData={d} />
                    ))}
                </Grid>
            </div>

            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    prev
                </button>

                {getPaginationGroup().map((item, index) => (
                    <button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}

                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    next
                </button>
            </div>

        </div>
    )
}

export default Pagination