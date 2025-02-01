import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  return (
    <section className="">
      <hr className="mb-8 border-t border-gray-200" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {clientsData.map((client, index) => (
            <SingleClient key={index} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
