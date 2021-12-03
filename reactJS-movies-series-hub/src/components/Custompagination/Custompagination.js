import React from 'react'
import './Custompagination.css'
import Pagination from "@material-ui/lab/Pagination";
function Custompagination({setPage,numberOfPage=10}) {
    function handlePageChange(page){
        setPage(page)
        window.scroll(0,0);
    }
    
    return (
        <Pagination
            className = "pagination"
            onChange={(evt,pageValue) => handlePageChange(pageValue)}
            count={numberOfPage}
            
        />
    )
}

export default Custompagination
