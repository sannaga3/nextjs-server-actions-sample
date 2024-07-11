import { Provider } from "jotai";
import SideMenu from "../components/SideMenu/SideMenu";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-screen">
      <div className="w-56 pt-8 bg-teal-900 text-white">
        <SideMenu />
      </div>

      <main className="bg-slate-100 flex-1 overflow-auto">
        <Provider>{children}</Provider>
      </main>
    </div>
  );
};

export default MainLayout;
