import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Footer from "./component/Footers";
import Card from "./component/Card";

import Navbar from "./component/navbar";
import BootstrapClient from "./component/BootstrapClient"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <BootstrapClient />
        <Footer/>
        </body>
    </html>
  );
}
