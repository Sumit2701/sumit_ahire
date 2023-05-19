import React, { useState ,} from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState();
  const searchApi=()=>{
    axios
    .get(`http://localhost:8082/api/books/${search}`)
    .then((res) => {
      setBooks(res.data);
    })
    .catch((err) => {
      console.log('Error from ShowBookList');
    });
  }
  const bookList =
    books.length === 0
      ? 'there is no book record!'
      : books.map((book, k) => <BookCard book={book} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
   
            <br />
            <h2 className='display-4 text-center'>Books List</h2>
          </div>
          <input type='text' onChange={(e)=>{setSearch(e.target.value)}}></input>
            <button className='btn float-right ' onClick={()=>{searchApi()}}>Search</button>
          <div className='col-md-11'>
            <Link
              to='/create-ad'
              className='btn btn-outline-warning float-right'
            >
              + Add New ad
            </Link>
            <Link
              to='/create-company'
              className='btn btn-outline-warning float-right'
            >
              + Add New Company
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{bookList}</div>
      </div>
    </div>
  );
}

export default ShowBookList;
