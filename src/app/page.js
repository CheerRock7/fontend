import React from 'react';
import Carousel from "./component/Carousel";
import Card from './component/Card';
import ImagCard1 from '../../public/111.jpg'
import ImagCard2 from '../../public/222.jpg'
import ImagCard3 from '../../public/333.jpg'


export default function Home() {
  return ( 
    <>
    <Carousel/>
    <section className="section">
      <div className="container">
        <h2 className="title">บริการของเรา</h2>
        <div className="row">
          <div className="col-md-4">
            <Card title="สายการบิน 1" description="ไปญี่ปุ่น" img={ImagCard1}/>
          </div>
          <div className="col-md-4">
            <Card title="สายการบิน 2" description="ไปเกาหลี" img={ImagCard2}/>
          </div>
          <div className="col-md-4">
            <Card title="สายการบิน 3" description="ไปจีน" img={ImagCard3}/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
