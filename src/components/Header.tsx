import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">Task Manager</h1>
      <DarkModeToggle />
    </header>
  );
};

export default Header;
