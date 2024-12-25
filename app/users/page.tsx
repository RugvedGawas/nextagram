import Image from "next/image";
import { EllipsisVertical } from "lucide-react";
import GlobalFooter from "../components/GlobalFooter";

export default function Home() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      image_url: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
      id: 2,
      name: "Gaan Doe",
      image_url: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
      id: 3,
      name: "Paan Doe",
      image_url: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
    {
      id: 4,
      name: "Run Doe",
      image_url: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full bg-white fixed top-0 z-10">
          <h1 className="font-pacifico text-4xl m-4">Nextagram</h1>
        </div>
        <div className="my-20">
          {users.map((user) => (
            <div key={user.id} className="p-4 w-full max-w-xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full w-10 h-10  flex items-center justify-center bg-gradient-to-r from-pink-600 via-yellow-400 via-pink-600 to-yellow-400 ">
                    <img
                      src={user.image_url}
                      alt=""
                      className="w-9 h-9 bg-white rounded-full"
                    />
                  </div>
                  <div>
                    <p>{user.name}</p>
                  </div>
                </div>
                <div>
                  <EllipsisVertical />
                </div>
              </div>
              <div className="relative bg-gray-300 overflow-hidden rounded-lg h-24 w-full  mt-2">
                <div className="absolute top-0 left-0 h-full w-full animate-shimmer bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GlobalFooter />
    </>
  );
}
