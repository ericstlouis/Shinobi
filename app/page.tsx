import About from "./components/sections/About";
import Work from "./components/sections/Work";

export default function Home() {
  return (
    <div className="h-screen flex">
      <About />
      <Work />  
    </div>
  )
}