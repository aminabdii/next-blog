import axios from "axios";
import Link from "next/link";

const CategoryList = async () => {
  const {
    data: {
      data: { categories },
    },
  } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/category/list`);

  return (
    <ul className="space-y-4">
      <Link href={`/blogs`}>همه</Link>
      {categories?.map((category) => {
        return (
          <li key={category?._id}>
            <Link href={`/blogs/category/${category?.slug}`}>
              {category?.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
