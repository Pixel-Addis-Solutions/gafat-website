import Image from "next/image";

"use client";
import { useGetPartnersQuery } from "@/store/app-api";
import SingleClient from "@/components/Clients/SingleClient";

const Partner = () => {
  const { data: partners = [] } = useGetPartnersQuery();

  return (
    <section className="min-h-screen f">
      <div className="container mx-auto px-4">
        <div className="text-center my-6">
          <h1 className="text-4xl  mt-5=10 font-bold text-gray-900">Partners</h1>
        </div>
        <hr className="mb-8 border-t border-gray-200" />
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {partners.map((partner: any, index: any) => (
            <SingleClient key={index} client={partner} />
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center my-6">
          <h1 className="text-3xl font-bold text-gray-900">Medical Suppliers</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center my-6">
          <h1 className="text-2xl">(Private)</h1>
        </div>
      </div>
      <hr className="mb-8 border-t border-gray-200" />
    </section>
  );
};

export default Partner;
