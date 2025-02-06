import Image from "next/image";
import Link from "next/link";
import { Partner } from "@/types/partner";

const SingleClient = ({ client }: { client: Partner }) => {
  const { name, link, image } = client;
  return (
    <div className="ud-single-logo mb-5 mr-10 max-w-[140px]">
      <Link href={link} target="_blank" rel="nofollow noopner">
        <img
      
          src={`https://api.alenafrica.org${image}`}
          alt={name}
          width={140}
          height={40}
        />
      </Link>
    </div>
  );
};

export default SingleClient;
