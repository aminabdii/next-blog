import Header from "@/components/Header";
import vazirFont from "@/constants/localFont";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s |  وب اپلیکیشن بلاگ",

    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} min-h-screen`}>
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
      </body>
    </html>
  );
}
