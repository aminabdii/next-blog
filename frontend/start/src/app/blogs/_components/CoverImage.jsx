import Image from "next/image";
import Link from "next/link";
const CoverImage = ({ title, coverImageUrl, slug }) => {
  return (
    <Link href={`/blogs/${slug}`}>
      <div className="relative aspect-video overflow-hidden rounded-md ">
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center cursor-pointer hover:scale-110 transition-all duration-300 ease-out "
        />
      </div>
    </Link>
  );
};

export default CoverImage;
