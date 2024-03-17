"use client";

import Link from "next/link";
import { Navbar, Button } from "flowbite-react";
import Logo from "../../../public/Images/logo.png";


export default function NavbarComponent() {
  return (
  <>
    <Navbar className="bg-primary z-20 fixed top-0 w-screen flex justify-center">
      <Navbar.Brand as={Link} href="#" className="ml-3">
        <img src="https://istad.co/resources/img/CSTAD_120.png" className="h-10 m-4 mr-4" alt="ISTAD" />
        <span className=" text-white ml-4 whitespace-nowrap text-xl font-semibold dark:text-white"> C S T A D</span>
      </Navbar.Brand>   
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg text-white">Home</Navbar.Link>
        <Navbar.Link href="/enroll" className="text-lg text-white">Enroll</Navbar.Link>
        <Navbar.Link href="/course" className="text-lg text-white">Course</Navbar.Link>
        <Navbar.Link href="#" className="text-lg text-white">IT News</Navbar.Link>
        <Navbar.Link href="#" className="text-lg text-white">Job Oppoitunity</Navbar.Link>
        <Navbar.Link href="#" className="text-lg text-white">Aout Us</Navbar.Link>
      </Navbar.Collapse>

      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-lg hidden text-white">---</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    
  </>
  );
}
