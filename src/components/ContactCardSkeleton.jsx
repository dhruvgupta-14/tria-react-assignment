import React from "react";

const ContactCardSkeleton = () => {
  return (
    <div className="bg-background px-4 py-4 sm:px-6 sm:py-5 rounded-2xl flex flex-col gap-4 animate-pulse-glow border border-gray-200">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 items-center sm:items-start">
        {/* Profile Image Skeleton */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-300 animate-skeleton"></div>

        {/* Text Skeletons */}
        <div className="flex-1 flex flex-col gap-2 w-full">
          <div className="h-5 w-3/4 sm:w-2/3 bg-gray-300 rounded-md animate-skeleton"></div>
          <div className="h-4 w-1/2 sm:w-1/3 bg-gray-200 rounded-md animate-skeleton"></div>
          <div className="h-4 w-2/3 sm:w-1/2 bg-gray-200 rounded-md animate-skeleton"></div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="h-10 w-24 sm:w-28 bg-gray-300 rounded-lg animate-skeleton mx-auto sm:mx-0"></div>
    </div>
  );
};

export default ContactCardSkeleton;

