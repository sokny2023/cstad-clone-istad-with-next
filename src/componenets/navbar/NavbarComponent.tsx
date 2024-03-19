"use client";

import Link from "next/link";
import { Navbar, Button } from "flowbite-react";

export default function NavbarComponent() {
  return (
    <>
      <Navbar className="bg-primary z-20 fixed top-0 w-screen flex justify-center">
        <Navbar.Brand as={Link} href="#" className=" ">
          <div className=" text-white flex justify-center items-center gap-4">
            <img
              className="w-12"
              src="https://istad.co/resources/img/CSTAD_120.png"
              alt=""
            />
            <span className="text-xl font-semibold">C S T A D</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" className="text-lg text-white">
            Home
          </Navbar.Link>
          <Navbar.Link href="/enroll" className="text-lg text-white">
            Enroll
          </Navbar.Link>
          <Navbar.Link href="/course" className="text-lg text-white">
            Course
          </Navbar.Link>
          <Navbar.Link href="/it" className="text-lg text-white">
            IT News
          </Navbar.Link>
          <Navbar.Link href="/job" className="text-lg text-white">
            Job Oppoitunity
          </Navbar.Link>
          <Navbar.Link href="/about-us" className="text-lg text-white">
            Aout Us
          </Navbar.Link>
        </Navbar.Collapse>

        <Navbar.Collapse>
          <Navbar.Link href="#" className="text-lg hidden text-white">
            ---
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
