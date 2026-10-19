
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WorkshopHealthSafetyContent from "@/components/workshop-health-safety/WorkshopHealthSafetyContent";

export default function WorkshopHealthSafetyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <WorkshopHealthSafetyContent />
      </main>
      <Footer />
    </>
  );
}
