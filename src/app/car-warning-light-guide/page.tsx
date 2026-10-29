import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CarWarningLightGuide from "@/components/car-warning-light-guide/CarWarningLightGuide";

export const metadata: Metadata = {
  title: "Car Warning Light Guide | VahanXpert",
  description:
    "Understand car dashboard warning lights, their meanings, severity, and what to do next with VahanXpert.",
  alternates: {
    canonical: "/car-warning-light-guide",
  },
};

export default function CarWarningLightGuidePage() {
  return (
    <>
      <Navbar />
      <main>
        <CarWarningLightGuide />
      </main>
      <Footer />
    </>
  );
}