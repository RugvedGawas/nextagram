import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full bg-white fixed top-0 z-10">
        <h1 className="text-4xl m-4">User Profile</h1>
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/128/456/456212.png"
        alt=""
        className="rounded-full w-10 h-10  flex items-center justify-center bg-white mt-20 shadow-xl m-4"
      />
    </>
  );
};

export default page;
