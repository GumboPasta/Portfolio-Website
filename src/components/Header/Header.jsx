export default function Header() {
  return (
    <header className="bg-white">
      <nav className="flex font-poppins justify-between items-center">
        <div className="text-black text-base font-medium p-6 pl-60 ml-10">Sergei Wong</div>
        <div className="flex p-6 space-x-8 mr-60 pr-12 font-medium text-sm ">
          <div>Home</div>
          <div>About</div>
          <div>Skills</div>
          <div>Portfolio</div>
          <div>Contacts</div>
        </div>
      </nav>
    </header>
  );
}
