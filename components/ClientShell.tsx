"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import ApplicationModal from "./ApplicationModal";

interface ClientShellProps {
  children: React.ReactNode;
}

export const ModalContext = React.createContext<{
  openModal: (service?: string, pkg?: string) => void;
}>({
  openModal: () => {},
});

export default function ClientShell({ children }: ClientShellProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("uk-ltd");
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  const openModal = (service = "uk-ltd", pkg = "") => {
    setSelectedService(service);
    setSelectedPackage(pkg);
    setModalOpen(true);
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      <div className="flex flex-col min-h-screen bg-[#08080A] text-white selection:bg-red-600 selection:text-white">
        <Navbar onOpenModal={(service) => openModal(service || "uk-ltd")} />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <ApplicationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultService={selectedService}
          defaultPackage={selectedPackage}
        />
      </div>
    </ModalContext.Provider>
  );
}
