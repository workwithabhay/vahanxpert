
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import VehicleTestDriveContent from "@/components/vehicle-test-drive/VehicleTestDriveContent";

export const metadata: Metadata = {
  title: "Vehicle Test Drive & Road Test Policy | VahanXpert Services",
  description:
    "Read VahanXpert Services' Vehicle Test Drive & Road Test Policy.",
};

export default function VehicleTestDriveRoadTestPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VehicleTestDriveContent />
      </main>
      <Footer />
    </>
  );
}
