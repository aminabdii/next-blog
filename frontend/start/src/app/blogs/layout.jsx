import { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/ui/Spinner";

export const metadata = {
  title: "بلاگ ها",
  //   title:{
  //     absolute:""  // ignore %s in parent layout
  //   }
};

const layout = ({ children }) => {
  return (
    <div>
      <h1 className="my-4 text-lg text-secondary-700">لیست بلاگ ها</h1>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 space-y-4 bg-red-100">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 bg-blue-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
