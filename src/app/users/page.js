'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function UsersPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        router.push('/signin');
        return;
      }
      fetchUsers(); // Fetch users if token is available
    };

    const fetchUsers = async () => {
      try {
        const res = await fetch('https://backend-alpha-indol.vercel.app/api/users');
        if (!res.ok) {
          console.error('Failed to fetch data');
          return;
        }
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    // Check login status on component mount
    checkLoginStatus();

    // Add event listener for localStorage changes
    window.addEventListener('storage', checkLoginStatus);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, [router]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`backend-alpha-indol.vercel.app/api/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete user');
      }

      // Optionally update the UI by removing the deleted user from the list
      setItems(items.filter(item => item.id !== id));

      console.log(`User with id ${id} deleted successfully.`);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>; // หรือแสดง spinner/loading indicator
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Users List
        </div>
        <div className="card-body">
          <div className="row">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th className='col-md-2 text-center'>#</th>
                  <th className='col-md-4'>Firstname</th>
                  <th className='col-md-4'>Lastname</th>
                  <th className='col-md-1'>Edit</th>
                  <th className='col-md-1'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className='text-center'>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td><Link href={`/users/edit/${item.id}`} className="btn btn-warning">Edit</Link></td>
                    <td><button className="btn btn-pill btn-danger" type="button" onClick={() => handleDelete(item.id)}><i className="fa fa-trash"></i>Del</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
