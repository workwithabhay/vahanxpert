
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import VehicleWashingContent from "@/components/vehicle-washing/VehicleWashingContent";

export const metadata: Metadata = {
  title:
    "Vehicle Washing, Cleaning, Detailing & Customer Property Protection Policy | VahanXpert Services",
  description:
    "Read VahanXpert Services' policy for vehicle washing, cleaning, detailing, safe chemical handling and customer property protection.",
};

export default function VehicleWashingPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleWashingContent />
      </main>
      <Footer />
    </>
  );
}
