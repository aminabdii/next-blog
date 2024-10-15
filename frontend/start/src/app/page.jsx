import Button from "@/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "وب اپلیکیشن بلاگ",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center my-20 ">
        اپلیکیشن مدیریت بلاگ
      </h1>
      <div className="text-center text-secondary-500 text-xl leading-loose   ">
        <p>جایی که قراره بتونی یه اپلیکیشن بلاگ کامل رو مدیریت کنی!</p>
        <p>بتونی بلاگ بسازی - کامنت بگذاری و در پنلت همه اتفاقات رو رصد کنی!</p>
      </div>
      <div className="flex justify-center items-center gap-x-10 mt-10">
        <Button variant="outline">
          <Link href="/blogs">مطالعه بلاگ ها</Link>
        </Button>
        <Button variant="primary">
          <Link href="/profile">مدیریت بلاگ ها</Link>
        </Button>
      </div>
    </div>
  );
}
