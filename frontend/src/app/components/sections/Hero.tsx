'use client'
import { Button } from "@/components/ui/button";
import {Text} from '../elements/Text'
import { Heading } from '../elements/Heading';
import { useRouter } from "next/navigation";
import {  useState } from "react";

export function Hero() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("");
  const handleGoAbout = () => {
    const about = document.getElementById("sobre");
    about?.scrollIntoView({ behavior: "smooth" });
  };
  const handleGoSection = (section: string) => {
    const sectionRef = document.getElementById(section);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });

      setActiveSection(section);
    }
  };
  return (
    <section
      className="flex h-screen w-full flex-col items-center justify-center gap-8 bg-[url('/irmaosaobra.png')] bg-cover bg-center px-20 transition-shadow max-md:gap-4 max-md:px-4 "
      id="inicio"
    >
      <Heading asChild size="6xl"  color="text-white ">
        <strong className="text-5xl max-md:text-center shadow-md bg-blue-950 bg-opacity-75 max-md:text-2xl">
          CONHEÇA O {" "}
          <span className="bg-white text-blue-950" color="text-blue-950">MELHOR</span> {" "}
          <br /> INVESTIMENTO MOBILIÁRIO!
        </strong>
      </Heading>
      <Text className="text-center text-xl text-black max-md:text-base  bg-blue-950 bg-opacity-75">
        Vamos descobrir o que é melhor para você?
      </Text>

      <Button
        className="w-48 max-w-[12rem] bg-blue-950 text-black-900"
        onClick={() => handleGoSection("Calc")}
      >
        Saiba mais
      </Button>
    </section>
  );
}