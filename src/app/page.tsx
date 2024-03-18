import Image from "next/image";
import Slide1 from "../../public/Images/a1.jpg";

import { Carousel } from "flowbite-react";
import CardComponent from "@/app/CardComponent";
import Test from "@/componenets/card/Test1";
import NavbarComponent from "@/componenets/navbar/NavbarComponent";
import MotionTop from "./MotionTop";
import MotionButtom from "./MotionButtom";
import MotionBtn from "./MotionBtn";
import SliderComponent from "./SliderComponent";

export default function Home() {
  return (
    <>
    <SliderComponent/>
    <CardComponent/>
         
    </>
  );
}
