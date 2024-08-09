import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import Slider1 from '../../../public/3.png'

export default function contact() {
  return (
    <>
      <div className="container">
    <div className="panel panel-info">
      <div className="panel-heading text-center">
        <strong><span className="glyphicon glyphicon-map-marker" /> ตำแหน่งที่ตั้ง</strong>
      </div>
      <div className="panel-body">
        <p style={{textAlign: 'center'}}>
          <iframe width={900} height={450} style={{border: 0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.117522208414!2d98.98110662519831!3d18.792915232354265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a9a71d80adf%3A0xe41f657fc5052416!2z4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiX4LiE4LiZ4Li04LiE4LmA4LiK4Li14Lii4LiH4LmD4Lir4Lih4LmI!5e0!3m2!1sth!2sth!4v1720150304181!5m2!1sth!2sth" frameBorder={0} allowFullScreen="allowfullscreen" />
        </p>
      </div>
    </div>
  </div>
    </>
  );
}
