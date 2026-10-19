
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import VendorSupplierContent from "@/components/vendor-supplier/VendorSupplierContent";

export const metadata: Metadata = {
  title: "Vendor & Supplier Management Policy | VahanXpert Services",
  description:
    "Read VahanXpert Services' Vendor & Supplier Management Policy covering vendor selection, onboarding, procurement approvals, quality checks, payments and performance monitoring.",
};

export default function VendorSupplierManagementPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <VendorSupplierContent />
      </main>
      <Footer />
    </>
  );
}
