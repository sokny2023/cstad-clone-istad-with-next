import { Carousel } from "flowbite-react";
import MotionTop from "./MotionTop";
import MotionButtom from "./MotionButtom";
import MotionBtn from "./MotionBtn";

export default function SliderComponent(){
    return(
        <div className="h-screen z-10 relative flex ">
        <Carousel slideInterval={2400}>
          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/a2.jpg')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <MotionTop>
                <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
                  Center of Science and Technology Advanced Development
                </h1>
              </MotionTop>
              <MotionButtom>
              <p className="mb-5 max-w-md text-left">
                CSTAD is a noteworthy science and technology center in Cambodia.
                CSTAD has routed Cambodian students to advanced science and
                technology, research, and develop digital skills and our
                graduates have been guaranteed excellent job opportunities with
                the Top IT company. Enroll Now
              </p>
              </MotionButtom>
              <MotionBtn>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
              </MotionBtn>
            </div>
          </div>

          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/a4.jpg')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
              <MotionTop>
              <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
              Vision
              </h1>
              </MotionTop>

              <MotionButtom>
              <p className="mb-5 max-w-md text-left">
              Advanced IT Center in Cambodia
              </p>
              </MotionButtom>

              <MotionBtn>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
              </MotionBtn>
              
            </div>
          </div>

          <div
            className=" bg-cover bg-center bg-no-repeat h-screen w-screen flex flex-col items-start justify-center text-white text-center p-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/a1.jpg')",
            }}
          >
            <div className="w-[80%] mx-auto flex flex-col justify-center items-start">
             <MotionTop>
             <h1 className="mb-5 text-left text-2xl md:text-5xl font-bold  ">
              Mission
              </h1>
             </MotionTop>

              <MotionButtom>
              <p className="mb-5 max-w-md text-left">
             
             Provide the latest methodology with high-quality training and mentoring

             Build up the capacity and career of IT experts Cambodia

             Consult and connect CSTAD trainees to top IT careers

             </p>
              </MotionButtom>

              <MotionBtn>
              <a
                href="#"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Enroll Now
              </a>
              </MotionBtn>
              
            </div>
          </div>

        </Carousel>
      </div>
    )
}