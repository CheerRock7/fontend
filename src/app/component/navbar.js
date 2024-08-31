'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Function to check login status
    const checkLoginStatus = () => {
      const token = localStorage.getItem('authToken');
      setIsLoggedIn(!!token);
    };

    // Check login status on component mount
    checkLoginStatus();

    // Add event listener for localStorage changes
    window.addEventListener('storage', checkLoginStatus);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    router.push('/signin'); // Redirect to signin page
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">สายการบินไปด้วยกันมั้ย</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/service">Service</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="d-flex ms-auto">
            {isLoggedIn ? (
              <button className="btn btn-outline-danger me-2" onClick={handleLogout}>Logout</button>
            ) : (
              <>
                <Link className="btn btn-outline-primary me-2" href="/signin">Sign In</Link>
                <Link className="btn btn-primary" href="/signup">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
