import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title } = feature;
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/4 m-8 px-4  h-64 bg-cover bg-center flex items-end p-4 rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className="text-white text-xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
        {title}
      </h3>
    </div>
  );
};

export default SingleFeature;
