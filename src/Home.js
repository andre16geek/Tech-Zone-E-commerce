import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* Banner */}
        <img className="home_banner" src="./banner.png" alt="Banner"></img>
        <div className="home_row">
          {/* Product */}
          <Product
            id="0001"
            title="Cracking the Coding Interview, 6th Edition: 189 Programming Questions and Solutions "
            price={29.99}
            image="./book.jpeg"
            rating={5}
          ></Product>
          <Product
            id="0002"
            title="New Apple MacBook Pro (13 Inch, 16 GB RAM, 512 GB SSD Storage, Magic Keyboard) - Space Gray"
            price={1300}
            image="./laptop.jpg"
            rating={5}
          ></Product>
        </div>
        <div className="home_row">
          {/* Product */}
          <Product
            title="Sony Alpha 6400 | APS-C Hybrid Digital Camera Kit with E 16-50mm f / 3.5-5.6 PZ OSS Zoom Lens (24.2 MP, AF in 0.02s, Eye Tracking, 4K HLG, Selfie Vlogging Screen ) (ILCE6400, A6400)"
            id="0003"
            price={999.99}
            image="./camera.jpg"
            rating={3}
          ></Product>

          <Product
            title="Sony WH-1000XM3 Wireless Noise Canceling Bluetooth Headphones with Mic for Phone Calls, Built-in Alexa and Google Assistant, Black"
            id="0004"
            price={249.99}
            image="./headphones.jpg"
            rating={4}
          ></Product>
          <Product
            id="0005"
            title="KROSER Laptop Backpack for 15.6 Inch Large Bag with Anti-theft Waterproof Casual Bag for Travel / Business"
            price={24}
            image="./backpack.jpg"
            rating={3}
          ></Product>
        </div>
        <div className="home_row">
          {/* Product */}

          <Product
            id="0006"
            title="SAMSUNG U32R590C, Curved PC Display, 4K UHD, 32 VA Panel, 4K Resolution (3840 x 2160), 60 Hz, 4ms, AMD FreeSync, Black"
            price={340}
            image="./monitor.jpg"
            rating={4}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
