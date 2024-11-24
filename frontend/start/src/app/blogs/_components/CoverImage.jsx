import Image from "next/image";
import Link from "next/link";
const CoverImage = ({ title, coverImageUrl, slug }) => {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 p-2 rounded-lg">
      <Link href={`/blogs/${slug}`}>
        <div className="relative aspect-video overflow-hidden rounded-md">
          <Image
            src={coverImageUrl}
            alt={title}
            fill
            className="object-cover object-center cursor-pointer hover:scale-110 transition-all duration-300 ease-out"
          />
        </div>
      </Link>
    </div>
  );
};

export default CoverImage;
