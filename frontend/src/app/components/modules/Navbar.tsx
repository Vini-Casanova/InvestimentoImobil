/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useEffect, useState } from "react";
import { Heading } from "../elements/Heading";
import { Text } from "../elements/Text";
import { clsx } from "clsx";
import { List, X } from "@phosphor-icons/react";


export function Navbar() {
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");
  const sectionsInitials = ["inicio", "sobre", "parceiros"];

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry;

        if (isIntersecting) {
          const sectionId = target.getAttribute("id");
          setActiveSection(sectionId || "");
        }
      });
    };

    let timeoutId: NodeJS.Timeout;
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    // Observar as seções
    const sectionRefs = document.querySelectorAll("section");
    sectionRefs.forEach((sectionRef) => observer.observe(sectionRef));

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        observer.disconnect();
        sectionRefs.forEach((sectionRef) => observer.observe(sectionRef));
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, []);

  const handleGoSection = (section: string) => {
    const sectionRef = document.getElementById(section);
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });

      setActiveSection(section);
    }
  };

  return (
    <nav className="fixed top-0 z-50 flex h-20 w-full items-center justify-between px-20 shadow-md backdrop-blur-[18px] max-md:px-4">
      <Heading
        size="xl"
        className={clsx(
          {
            "text-white": sectionsInitials.includes(activeSection),
            "max-md:text-gray-950": activeSection === "parceiros",
            "text-gray-950": !sectionsInitials.includes(activeSection),
          },
          "transition-colors duration-300"
        )}
      >
        Parajás
      </Heading>

      <div className="flex items-center space-x-10 max-md:hidden">
        <ButtonNavbar
          text="Início"
          onClick={() => handleGoSection("inicio")}
          active={activeSection === "inicio"}
          className={clsx({
            "text-gray-300 hover:text-gray-100 max-md:text-gray-800":
              sectionsInitials.includes(activeSection),
            "text-gray-800 hover:text-gray-600":
              !sectionsInitials.includes(activeSection),
            "text-white": activeSection === "inicio",
          })}
        />
        <ButtonNavbar
          text="Quem somos"
          onClick={() => handleGoSection("sobre")}
          active={activeSection === "sobre" || activeSection === "parceiros"}
          className={clsx({
            "text-gray-300 hover:text-gray-100":
              sectionsInitials.includes(activeSection),
            "text-gray-800 hover:text-gray-600":
              !sectionsInitials.includes(activeSection),
            "text-white": activeSection === "sobre",
          })}
        />
        <ButtonNavbar
          text="Soluções"
          onClick={() => handleGoSection("solucoes")}
          active={activeSection === "solucoes"}
          className={clsx({
            "text-gray-300 hover:text-gray-100":
              sectionsInitials.includes(activeSection),
            "text-gray-800 hover:text-gray-600":
              !sectionsInitials.includes(activeSection),
            "text-gray-900": activeSection === "solucoes",
          })}
        />
        <ButtonNavbar
          text="Equipe"
          onClick={() => handleGoSection("equipe")}
          active={activeSection === "equipe"}
          className={clsx({
            "text-gray-300 hover:text-gray-100":
              sectionsInitials.includes(activeSection),
            "text-gray-800 hover:text-gray-600":
              !sectionsInitials.includes(activeSection),
            "text-gray-900": activeSection === "solucoes",
          })}
        />
        <ButtonNavbar
          text="Contato"
          onClick={() => handleGoSection("contato")}
          active={activeSection === "contato"}
          className={clsx({
            "text-gray-300 hover:text-gray-100":
              sectionsInitials.includes(activeSection),
            "text-gray-800 hover:text-gray-600":
              !sectionsInitials.includes(activeSection),
            "text-gray-900": activeSection === "solucoes",
          })}
        />
      </div>

      <div className="hidden max-md:block">
        <List
          className={clsx(
            {
              "text-white": sectionsInitials.includes(activeSection),
              "max-md:text-gray-950": activeSection === "parceiros",
              "text-gray-950": !sectionsInitials.includes(activeSection),
            },
            "transition-colors duration-300"
          )}
          size={30}
          onClick={() => {
            setIsNavbarMobileOpen((prev) => !prev);
          }}
        />
      </div>

      <div
        className={clsx(
          "fixed left-0 top-0 z-50 h-screen w-screen backdrop-blur-[18px]  transition-all duration-500",
          {
            "translate-x-[9999px] transform": !isNavbarMobileOpen,
            "translate-x-0 transform": isNavbarMobileOpen,
          }
        )}
      >
        <div className="fixed top-6 right-[0] items-center h-20 px-20">
          <X
            size={24}
            className={clsx({
              "text-gray-300 hover:text-gray-100":
                sectionsInitials.includes(activeSection),
              "text-gray-800 hover:text-gray-600":
                !sectionsInitials.includes(activeSection),
              "text-white": activeSection === "inicio",
            })}
            onClick={() => setIsNavbarMobileOpen(false)}
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center space-y-10">
          <ButtonNavbar
            text="Início"
            onClick={() => handleGoSection("inicio")}
            active={activeSection === "inicio"}
            className={clsx({
              "text-gray-300 hover:text-gray-100":
                sectionsInitials.includes(activeSection),
              "text-gray-800 hover:text-gray-600":
                !sectionsInitials.includes(activeSection),
              "text-white": activeSection === "inicio",
            })}
          />
          <ButtonNavbar
            text="Quem somos"
            onClick={() => handleGoSection("sobre")}
            active={activeSection === "sobre" || activeSection === "parceiros"}
            className={clsx({
              "text-gray-300 hover:text-gray-100":
                sectionsInitials.includes(activeSection),
              "text-gray-800 hover:text-gray-600":
                !sectionsInitials.includes(activeSection),
              "text-white": activeSection === "sobre",
            })}
          />
          <ButtonNavbar
            text="Soluções"
            onClick={() => handleGoSection("solucoes")}
            active={activeSection === "solucoes"}
            className={clsx({
              "text-gray-300 hover:text-gray-100":
                sectionsInitials.includes(activeSection),
              "text-gray-800 hover:text-gray-600":
                !sectionsInitials.includes(activeSection),
              "text-gray-900": activeSection === "solucoes",
            })}
          />
          <ButtonNavbar
            text="Equipe"
            onClick={() => handleGoSection("equipe")}
            active={activeSection === "equipe"}
            className={clsx({
              "text-gray-300 hover:text-gray-100":
                sectionsInitials.includes(activeSection),
              "text-gray-800 hover:text-gray-600":
                !sectionsInitials.includes(activeSection),
              "text-gray-900": activeSection === "solucoes",
            })}
          />
          <ButtonNavbar
            text="Contato"
            onClick={() => handleGoSection("contato")}
            active={activeSection === "contato"}
            className={clsx({
              "text-gray-300 hover:text-gray-100":
                sectionsInitials.includes(activeSection),
              "text-gray-800 hover:text-gray-600":
                !sectionsInitials.includes(activeSection),
              "text-gray-900": activeSection === "solucoes",
            })}
          />
        </div>
      </div>
    </nav>
  );
}

type ButtonNavbarProps = {
  text: string;
  href?: string;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}