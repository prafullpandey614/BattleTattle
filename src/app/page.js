"use client"

import Header from "./components/Header";
import MainContent from "./components/Home/MainContent";
import Features from "./components/Home/Features";
import InfoCard from "./components/Home/InfoCard";

export default function Home() {
  return (
    <main >
      {/* <Header/> */}
      <MainContent/>
      <Features />
      <InfoCard/>
    </main>
  );
}
