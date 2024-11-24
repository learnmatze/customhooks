import BooksListItem from "./BooksListItem.tsx";

function Pagination({currentPage, totalPages = 5, onPageChanged}) {

    function generateNoOfPages() {
        let pages = Array<number>();
        for(let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    return (
        <div style={{paddingTop: '10px', paddingBottom: '10px', border: "solid"}}>
            <button disabled={currentPage === 1} className="pagination-btn" onClick={() => onPageChanged(currentPage - 1)}>Prev</button>
            {generateNoOfPages().map((pageNo) => {
                return (<button
                    style={{
                        fontWeight: pageNo === currentPage ? 'bold' : 'normal', // Highlight current page
                        backgroundColor: pageNo === currentPage ? '#007bff' : 'white', // Optional styling
                        color: pageNo === currentPage ? 'white' : 'black'
                    }}
                    key={pageNo} onClick={() => onPageChanged(pageNo)}>{pageNo}</button>)
            })}
            <button disabled={currentPage >= totalPages} className="pagination-btn" onClick={() => onPageChanged(currentPage + 1)}>Next</button>
        </div>
    )
}

export default Pagination;