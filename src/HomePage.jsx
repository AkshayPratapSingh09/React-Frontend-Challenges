import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <div className="Pagination">
        <Link to='/pagination'>Pagination</Link>
    </div>
    <div className="AutoComplete">
        <Link to='/autoComplete'>Auto Complete</Link>
    </div>
    </>
  )
}

export default HomePage;