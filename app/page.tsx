import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <div className="max-w-6xl mx-auto mt-4 mb-10 p-5 grid grid-cols-2 gap-x-2 gap-y-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-lg inline-block text-sm text-gray-800 cursor-pointer">
          New Note
        </button>
      </div>
      <div className="h-full"></div>
    </div>
  );
}

function Card() {
  return (
    <Link
      href="/note/1"
      className="group h-36 p-2 border rounded-md border-gray-700 hover:border-black hover:shadow-md hover:bg-gray-50 transition-colors cursor-pointer relative overflow-hidden select-none"
    >
      <div className="absolute top-0 right-0 px-3 pl-4 py-1 rounded-bl-md translate-x-full group-hover:translate-0 transition-[transform_colors] bg-gray-200 hover:bg-gray-300">
        Hide
      </div>
      <h1 className="text-lg truncate">AI Generated Name</h1>
      <p className="text-md text-gray-700 line-clamp-3">Content / AI Summary</p>
    </Link>
  );
}
