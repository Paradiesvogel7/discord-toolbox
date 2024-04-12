"use client";
import React from "react";
import { NextPage } from "next";
import { NavBar } from "@/components/NavBar";
import { HeroHighlight } from "@/components/HeroHighlight";
import { Button, Link } from "@nextui-org/react";
import { Footer } from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="home h-screen">
      <NavBar />
      <HeroHighlight>
        <h1 className="text-2xl px-4 md:text-4xl lg:text-7xl font-black text-blurple max-w-4xl text-center mx-auto mb-4">
          Discord Toolbox
        </h1>
        <p className="text-lg px-4 md:text-2xl lg:text-4xl font-semibold text-white max-w-4xl text-center mx-auto">
          A collection of tools for Discord users and developers.
        </p>
        <div className="flex justify-center mt-8 gap-4">
          <Link href="/tools">
            <Button
              size="lg"
              variant="solid"
              color="primary"
              className="font-bold"
            >
              Get Started
            </Button>
          </Link>
          <Link href="/about">
            <Button
              size="lg"
              variant="solid"
              color="secondary"
              className="font-bold"
            >
              About
            </Button>
          </Link>
        </div>
        <p className="text-xs text-white text-center mt-8">
          © {new Date().getFullYear()}. All rights reserved
        </p>
      </HeroHighlight>
      <Footer />
    </div>
  );
};

export default Home;
