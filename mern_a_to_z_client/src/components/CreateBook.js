import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateBook = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [ad, setAd] = useState({
    id: '',
    companyId: '',
    primaryText: '',
    headline: '',
    CTA: '',
    imageUrl: '',
    description:''
  });

  const onChange = (e) => {
    setAd({ ...ad, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/books', ad)
      .then((res) => {
        setAd({
          id: '',
          companyId: '',
          primaryText: '',
          headline: '',
          CTA: '',
          imageUrl: '',
          description:''
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
            <h1 className='display-4 text-center'>Add Advertisement</h1>
            <p className='lead text-center'>Create new Advertisement</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='id'
                  name='id'
                  className='form-control'
                  value={ad.id}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='companyId'
                  name='companyId'
                  className='form-control'
                  value={ad.companyId}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='primaryText'
                  name='primaryText'
                  className='form-control'
                  value={ad.primaryText}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='headline'
                  name='headline'
                  className='form-control'
                  value={ad.headline}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='description'
                  name='description'
                  className='form-control'
                  value={ad.description}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='CTA'
                  name='CTA'
                  className='form-control'
                  value={ad.CTA}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='imageUrl'
                  name='imageUrl'
                  className='form-control'
                  value={ad.imageUrl}
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

export default CreateBook;
