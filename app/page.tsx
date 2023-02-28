import Image from "next/image"

export default function Home() {
  return (
    <div className="max-h-screen">
        <div className="flex flex-col items-center justify-center h-screen">

          {/* heading */}
          <div className="flex items-center space-x-2">
            <Image
              className="rounded-full"
              src="/pengnuin_pfp.jpg"
              alt="A pengnuin"
              width={40}
              height={200}
            />
            <h1 className="text-xl font-manrope font-bold  ">Shinobi</h1>
          </div>
          </div>
    </div>

  )
}