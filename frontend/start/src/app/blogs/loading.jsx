import Spinner from "@/ui/Spinner";
import { Span } from "next/dist/trace";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
      <span className="text-secondary-600 text-xl font-medium">
        در حال بارگذاری
      </span>
      <Spinner />
    </div>
  );
}

export default Loading;
