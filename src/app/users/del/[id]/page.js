'use client';
import { useEffect, useState } from 'react';

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
        if (data.length > 0) {
          // Assuming data contains a single user object
          const user = data[0];
          setFirstName(user.firstname || '');
          setLastName(user.lastname || '');
          setUserName(user.username || '');
          setPassWord(''); // Don’t prefill password for security reasons
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getUsers();
  }, [id]);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', // Ensure Content-Type is set
        },
        body: JSON.stringify({ firstname, lastname, username, password }),
      });

      if (!res.ok) {
        throw new Error('Failed to update data');
      }

      const result = await res.json();
      console.log(result);
      // You may want to handle the result here (e.g., show a success message or redirect)
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <>
      <br /><br /><br />
      <div className="container">
        <div className="card">
          <div className="card-header bg-warning text-dark">
            Edit Form
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={handleUpdateSubmit}>
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastname" className="form-label">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  className="form-control"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassWord(e.target.value)}
                />
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-warning">
                  <i className="bi bi-box-arrow-right"></i> Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
