import React from 'react';
import Card from '../component/Card';
import Image from 'next/image'
import ImagCard1 from '../../../public/123.jpeg'
import ImagCard2 from '../../../public/456.jpg'
import ImagCard3 from '../../../public/789.jpeg'

export default function about() {
  return ( 
    <>
    <section className="section">
      <div className="container">
        <h2 className="title">About</h2>
        <div className="row">
          <div className="col-md-4">
            <Card title="developer" description="แมว 1" img={ImagCard1}   />

          </div>
          <div className="col-md-4">
            <Card title="font-end" description="แมว 2" img={ImagCard2}/>
          </div>
          <div className="col-md-4">
            <Card title="Bac-end" description="แมว 3" img={ImagCard3}/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
