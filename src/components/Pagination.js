import React, {useState} from 'react'

export default function Pagination({ articlesPerPage, totalArticles, paginate, setItemsShow }) {
    const pageNumbers = [];
    const [selectedClient,setSelectedClient] = useState(articlesPerPage);

    function handleSelectChange(event) {
        setSelectedClient(event.target.value);
        setItemsShow(event.target.value)
    }

    for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
        pageNumbers.push(i);
    }

    const itemNumber = []
    for (let i = 1; i <= 100; i++) {
        itemNumber.push(i)
    }


    return (
        <>
            <nav className="page-selector">
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="#articles" className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <select value={selectedClient} onChange={handleSelectChange} name="pageNumber" id="pageNumber">
                {itemNumber.map(number => (
                    <option key={number} value={number}>{number}</option>
                ))}
            </select>
        </>
    )
}
