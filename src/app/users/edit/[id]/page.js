'use client';
import { useState, useEffect } from 'react';

export default function Page({ params }) {
  const { id } = params;
  const [items, setItems] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassWord] = useState('');

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(`http://localhost:3000/api/users/${id}`);
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
    //const interval = setInterval(getUsers, 1000);
   // return () => clearInterval(interval);
  }, []);

  const handleupdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/users', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, firstname, lastname, username, password }),
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    
  };
  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-success text-white">
            Edit Form {JSON.stringify(items)}
          </div>
          <div className="card-body">
        {items.map((item) => (
            <form className="row g-3" onSubmit={handleupdateSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">FirstName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input
                    type="text"
                    id="firstname"
                    className="form-control"
                    defaultValue={item.firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">LastName</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input
                    type="text"
                    id="lastname"
                    className="form-control"
                    defaultValue={item.lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon3">
                    <i className="bi bi-person-vcard"></i>
                  </span>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    defaultValue={item.username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon4">
                    <i className="bi bi-person-vcard-fill"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    defaultValue={item.password}
                    onChange={(e) => setPassWord(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-success">
                  <i className="bi bi-box-arrow-right"></i> Update
                </button>
              </div>
            </form>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
