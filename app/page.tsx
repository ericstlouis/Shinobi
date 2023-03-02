import Image from "next/image"
import Link from "next/link"
import {AiFillYoutube, AiFillGithub, AiOutlineTwitter} from "react-icons/ai"

export default function Home() {
  return (
    <div className="max-h-screen">
        <div className="flex flex-col items-center h-screen">

          {/* heading */}
          <div className="flex items-center space-x-2 mb-3 mt-14">
            <Image
              className="rounded-full"
              src="/pengnuin_pfp.jpg"
              alt="A pengnuin"
              width={40}
              height={200}
            />
            <h1 className="text-xl font-bold">Shinobi</h1>
          </div>

          {/* subheading */}
          <div className="flex flex-col items-center">
            <p className="font-meduim text-lg mb-2 tracking-wide">I try to make stuff</p>
            <div className="flex items-center mb-10">
              <h4 className="font-thin tracking-widest mr-2 ">FIND ME ON: </h4>
              <ul className="flex space-x-3 text-2xl">
                <Link href={"https://www.youtube.com/"} rel="noopener noreferrer" target="_blank">
                <li className="hover:text-red-500">
                  <AiFillYoutube />    
                </li>
                </Link>
                <Link href={"https://twitter.com/shinobi_242"} rel="noopener noreferrer" target="_blank">
                <li className="hover:text-blue-500">
                  <AiOutlineTwitter />
                </li>
                </Link>
                <Link href={"https://github.com/ericstlouis"} rel="noopener noreferrer" target="_blank">
                <li className="">
                  <AiFillGithub />
                </li>
                </Link>
              </ul>
            </div>
          </div>

          {/* Work */}
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-lg font-semibold tracking-widest mb-2 underline underline-offset-4">Work</h2>
            <ol className="text-base font-light flex flex-col items-center w-12/12 space-y-4 ">
              {/* arrows has to go next to description */}
              <li>
                TELLER - An application for story tellers ➡️
              </li>
              <li>
                ARA - A chrome extension that aggrega...➡️
              </li>
            </ol>
          </div>

          {/* CTA Boruto 😈 */}
          <div className="flex items-center justify-center">
            <Link  href={"https://youtu.be/B5c2PkSRfc8"} rel="noopener noreferrer" target="_blank">
              <div className="py-20 px-16 bg-gray-400 rounded-xl bg-opacity-20 w-full">
                 <h4 className="">
                  Click to witness greatness
                  </h4>
              </div>
            </Link>
          </div>

          {/* footer */}
          <div className="mt-auto mb-4">
            <h4 className="font-thin hover:text-pink-400">Built & Designed by shinobi🥷🏽</h4>
            </div>
              

        </div>
    </div>

  )
}