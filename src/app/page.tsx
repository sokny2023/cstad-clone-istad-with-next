import Image from "next/image";
import Slide1 from "../../public/Images/a1.jpg";

import { Carousel } from "flowbite-react";
import CardComponent from "@/app/CardComponent";
import Test from "@/componenets/card/Test1";
import NavbarComponent from "@/componenets/navbar/NavbarComponent";

export default function Home() {
  return (
    <>

    <div className="h-screen z-10 relative flex ">
        <Carousel slideInterval={1000}>
          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1710683143~exp=1710686743~hmac=681cfad341747e64c363e808c5fb92616540d34facc899ef2f46a097048b3bd3&w=996')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
                Center of Science and Technology Advanced Development
              </h1>
              <p className="mb-5 max-w-md text-left">
                CSTAD is a noteworthy science and technology center in Cambodia.
                CSTAD has routed Cambodian students to advanced science and
                technology, research, and develop digital skills and our
                graduates have been guaranteed excellent job opportunities with
                the Top IT company. Enroll Now
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-131.jpg?t=st=1710687549~exp=1710691149~hmac=594ba716f97105a343cb7a91dea8b773ca4e0e3eac8824470b83e5493626ceba&w=1380')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
              Vision
              </h1>
              <p className="mb-5 max-w-md text-left">
              Advanced IT Center in Cambodia
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
            </div>
          </div>

          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://img.freepik.com/free-photo/standard-quality-control-collage_23-2149631012.jpg?t=st=1710698844~exp=1710702444~hmac=edd9aa01ede38dd9cdff150c8273f16bd46bde73211011b722ceffb5b5b7ece5&w=996')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
              Mission
              </h1>
              <p className="mb-5 max-w-md text-left">
             
              Provide the latest methodology with high-quality training and mentoring

              Build up the capacity and career of IT experts Cambodia

              Consult and connect CSTAD trainees to top IT careers

        
              </p>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
            </div>
          </div>

        </Carousel>
      </div>

    <CardComponent/>
         
   

  


     

     
    </>
  );
}
