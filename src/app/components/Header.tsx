"use client";
import { memo, useState, useEffect } from "react";
import PrimaryArrowLink from "@/components/PrimaryArrowLink";
import Logo from "@/components/svg/Logo";
import PcHeaderLinks from "@/app/components/PcHeaderLinks";
import Container from "@/app/components/Container";

const links = ["Home", "About", "Contact", "Faqs"];

function Header() {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const loggedIn = false;

  const handleScroll = () => {
    const isScrolling = window.scrollY > 20;
    setScrolling(isScrolling);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (window.scrollY > 20) {
      setScrolling(true);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed flex flex-col w-full transition-all duration-200 ease-out top-0 z-[999] ${
        scrolling ? "bg-background/70 backdrop-blur shadow py-4" : "py-6"
      }`}
    >
      <Container>
        <div className="grid gap-5 grid-cols-[auto_1fr_auto] items-center justify-between">
          <div className="flex gap-2 items-center">
            <Logo size={32} />
            <p className="text-3xl font-extrabold  bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent">
              <span>
                <span className="pr-0.5">Notivo </span>
              </span>
            </p>
          </div>
          <div>
            <PcHeaderLinks links={links} />
          </div>
          <div>
            <PrimaryArrowLink shine link={loggedIn ? "dashboard" : "register"}>
              {loggedIn ? "Dashboard" : "Register"}
            </PrimaryArrowLink>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default memo(Header);
