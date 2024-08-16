import React from 'react';

const Footer = () => {
  return (
<footer className="bg-body-tertiary text-center">
  <div className="container p-4 pb-0">
    <section className="mb-4">
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter" /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" href="#!" role="button"><i className="fab fa-google" /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram" /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" href="#!" role="button"><i className="fab fa-github" /></a>
    </section>
  </div>
  <div className="text-center p-3">
    © 2024 Nuntasit:
    <a className="text-body" href="#">Nuntasit</a>
  </div>
</footer>

  );
};

export default Footer;