import React from "react";
import { Plus, User, Home, Search, Video } from "lucide-react";

const GlobalFooter = () => {
  return (
    <>
      <div className="fixed bottom-0 w-full bg-white border-t border-gray-400 shadow-xl p-4 flex justify-between items-center">
        <div className="rounded-full flex justify-center items-center bg-gray-400 p-1">
          <Home className="" />
        </div>
        <div className="rounded-full flex justify-center items-center bg-gray-400 p-1">
          <Search />
        </div>

        <div className="rounded-full flex justify-center items-center bg-gray-400 p-1">
          <Plus />
        </div>
        <div className="rounded-full flex justify-center items-center bg-gray-400 p-1">
          <Video />
        </div>
        <div className="rounded-full flex justify-center items-center bg-gray-400 p-1">
          <User />
        </div>
      </div>
    </>
  );
};

export default GlobalFooter;
