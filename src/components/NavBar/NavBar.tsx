import NavBarLink from "./NavBarLink";

export default function NavBar() {
  return (
    <nav>
      <header className="flex flex-row bg-neutral-800/80 h-12">
        <div className="space"></div>
        <div className=" w-full flex justify-center items-center gap-20 py-2">
          <NavBarLink label="About" />
          <NavBarLink label="DevLogs" />
          <NavBarLink label="Photos" />
          <NavBarLink label="Timeline" />
        </div>
      </header>
    </nav>
  );
}
