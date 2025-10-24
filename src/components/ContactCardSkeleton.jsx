import React from "react";

const ContactCardSkeleton = () => {
  return (
    <div className="bg-background px-6 py-4 rounded-2xl flex flex-col gap-4 animate-pulse-glow border border-gray-200">
      {/* Top Section */}
      <div className="flex gap-4">
        {/* Profile Image Skeleton */}
        <div className="w-20 h-20 rounded-full bg-gray-300 animate-skeleton"></div>

        {/* Text Skeletons */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-5 w-3/4 bg-gray-300 rounded-md animate-skeleton"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-skeleton"></div>
          <div className="h-4 w-2/3 bg-gray-200 rounded-md animate-skeleton"></div>
        </div>
      </div>

      {/* Button Skeleton */}
      <div className="h-10 w-24 bg-gray-300 rounded-lg animate-skeleton"></div>
    </div>
  );
};

export default ContactCardSkeleton;
