import React from "react";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const FooterComponent = () => {
    return (
        <Footer className="bg-primary mt-10 w-8/12 flex justify-center gap-10">
          <section className="w-full h-full mx-10 mt-2 bg-red-500">
            <div className="grid mx-auto ml-24 mt-10 w-10/12 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="ml-10 text-white">
                <Footer.Brand
                  href="https://istad.co/resources/img/CSTAD_120.png"
                  src="https://istad.co/resources/img/CSTAD_120.png"
                  alt="ISTAD"
                  name="CSTAD"
                />
              </div>
              <div className="w-1/2 flex justify-between">
                <div>
                  <Footer.Title title="about" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Flowbite</Footer.Link>
                    <Footer.Link href="#">Tailwind CSS</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Follow us" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Github</Footer.Link>
                    <Footer.Link href="#">Discord</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title title="Legal" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                  </Footer.LinkGroup>
                </div>
              </div>
            </div>
            <Footer.Divider />
            <div className="mx-auto mb-6">
              <h3 className="text-2xl text-center">CSTAD</h3>
              
            </div>
          </section>
        </Footer>
      );
};


export default FooterComponent;
