import '../App.css'
import React, { useState, useEffect } from 'react'
import { Grid, Button } from '@mui/material'

const PAGE_KEY = 'MY_PAGINATION_KEY'

const getPageNumber = () => {
    if (sessionStorage && parseInt(sessionStorage.getItem(PAGE_KEY)) > 0) {
        return parseInt(sessionStorage.getItem(PAGE_KEY))
    }
    return 1
}

function Pagination({ allData, RenderComponent, title, pageLimit, dataLimit }) {

    const [currentPage, setCurrentPage] = useState(getPageNumber());
    const [pages, setPages] = useState(1);

    useEffect(() => {
        setPages(Math.ceil(allData.length / dataLimit));
        setCurrentPage(1)
    }, [allData, dataLimit]);

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
                <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                    justifyContent="center">
                    {getPaginatedData().map((d, idx) => {
                        return <RenderComponent key={idx} allData={d} />
                    })}
                </Grid>
            </div>

            <div className="pagination">
                <Button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    Prev
                </Button>

                {getPaginationGroup().map((item, index) => (
                    <Button
                        key={index}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </Button>
                ))}

                <Button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    Next
                </Button>
            </div>

        </div>
    )
}

export default Pagination