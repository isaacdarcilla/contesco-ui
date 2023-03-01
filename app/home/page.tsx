import SidebarButton from "@/components/sidebar/SidebarButton";
import { Home, Settings } from "react-feather";
import Sidebar from "@/components/sidebar/Sidebar";
import NavBar from "@/components/navbar/NavBar";
import { Lora } from "next/font/google";
import HomeComponent from "@/components/page/HomeComponent";

const lora = Lora();

export default function HomePage() {
  return (
    <main className={lora.className}>
      <div className="bg-primary h-screen w-full flex overflow-hidden">
        <Sidebar>
          <SidebarButton content="Home" link="/home">
            <Home size={18} />
          </SidebarButton>
        </Sidebar>

        <NavBar>
          <HomeComponent />
        </NavBar>
      </div>
    </main>
  );
}
