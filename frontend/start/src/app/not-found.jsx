"use client";
import { useMoveBack } from "@/hooks/useMoveBack";
import Button from "@/ui/Button";
import React from "react";

const NotFound = () => {
  const moveback = useMoveBack();

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <div className="flex flex-col items-center border border-gray-300 rounded-xl px-10 py-20 xl:px-32 xl:py-10">
        <h1 className="text-base xl:text-3xl  text-secondary-500 mb-6">
          صفحه مورد نظر یافت نشد
        </h1>
        <Button onClick={moveback}>بازگشت</Button>
      </div>
    </div>
  );
};

export default NotFound;
