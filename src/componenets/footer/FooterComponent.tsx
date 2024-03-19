import React from "react";
import { Footer } from 'flowbite-react';

const FooterComponent = () => {
    return (
        <Footer className="bg-primary mt-10 w-8/12 flex justify-center gap-10">
          <section className="w-full h-full mx-10 mt-2 bg-red-500">
            <div className="grid mx-auto ml-24 mt-10 w-10/12 justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div className="ml-10 text-white flex justify-center items-center gap-4">
                <img className="w-16" src="https://istad.co/resources/img/CSTAD_120.png" alt="" />
                <span className="text-xl ">Start your IT career with C S T A D</span>
              </div>
              <div className="w-1/2 flex justify-between">
                <div>
                  <Footer.Title className="text-white" title="Learn more" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#" className="text-white">Coures</Footer.Link>
                    <Footer.Link href="#" className="text-white">IT News</Footer.Link>
                    <Footer.Link href="#" className="text-white">Job Oppornity</Footer.Link>
                    <Footer.Link href="#" className="text-white">Privacy Policy</Footer.Link>
                    <Footer.Link href="#" className="text-white">FAQ</Footer.Link>   
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title className="text-white" title="Contact us" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#" className="text-white">(+855) 95-990-910</Footer.Link>
                    <Footer.Link href="#" className="text-white">(+855) 93-990-910</Footer.Link>
                    <Footer.Link href="#" className="text-white">Telegram</Footer.Link>
                    <Footer.Link href="#" className="text-white">Youtube</Footer.Link>
                    <Footer.Link href="#" className="text-white">FaceBook</Footer.Link>   
                  </Footer.LinkGroup>
                </div>
                <div>
                  <Footer.Title className="text-white" title="Cours" />
                  <Footer.LinkGroup col>
                    <Footer.Link href="#" className="text-white">IT Experts</Footer.Link>
                    <Footer.Link href="#" className="text-white">Fundadamental</Footer.Link>
                    <Footer.Link href="#" className="text-white">Short Course</Footer.Link>
                  </Footer.LinkGroup>
                </div>
                {/* <div>
                  <iframe src="https://www.facebook.com/istad.co" ></iframe>
                </div> */}
              </div>
            </div>
            <Footer.Divider />
            <div className="mx-auto mb-6">
              <h3 className="text-xl text-white text-center">© 2024 Center of Science and Technology Advanced Development | All Rights Reserved</h3>
              
            </div>
          </section>
        </Footer>
      );
};


export default FooterComponent;
