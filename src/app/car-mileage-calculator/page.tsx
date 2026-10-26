
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CarMileageCalculator from "@/components/car-mileage-calculator/CarMileageCalculator";
import { MapPin, Fuel, IndianRupee } from "lucide-react";

export const metadata: Metadata = {
  title: "Car Mileage Calculator | VahanXpert",
  description:
    "Calculate your car's mileage, fuel cost, cost per kilometre and trip expenses with the free VahanXpert car mileage calculator.",
};

export default function CarMileageCalculatorPage() {
  return (
    <>
      <Navbar />
      <main>
        <CarMileageCalculator />
      </main>
      <Footer />
    </>
  );
}
