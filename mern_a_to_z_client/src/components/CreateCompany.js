import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateCompany = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [company, setCompany] = useState({
    id: '',
    name: '',
    url: '',
  });

  const onChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/books/company', company)
      .then((res) => {
        setCompany({
          id: '',
          name: '',
          url: '',
          
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Ad List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Company</h1>
            <p className='lead text-center'>Create new Advertisement</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='id'
                  name='id'
                  className='form-control'
                  value={company.id}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='name'
                  name='name'
                  className='form-control'
                  value={company.name}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='url'
                  name='url'
                  className='form-control'
                  value={company.url}
                  onChange={onChange}
                />
              </div>

            

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
