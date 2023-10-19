import { IconPlus } from "@tabler/icons-react";

const Header = ({ handleOpenModal }) => {
  return (
    <header className="flex justify-between items-center p-3 md:p-5 xl:px-32 xl:pt-10 xl:pb-5">
      <h1 className="text-2xl pl-1 md:text-4xl md:p font-bold text-[#0F0F2D]">Usuarios</h1>
      {/* <h1 className="text-xl font-bold text-[#0F0F2D]">Usuarios</h1> */}
      <button
        onClick={handleOpenModal}
        className="bg-[#555A88] text-white p-2 md:p-3 text-xs md:text-lg flex items-center font-semibold rounded-md hover:bg-[#727ac0] transition-colors"
      >
        <IconPlus className="w-4 md:w-10" /> <span className="ml-1 md:ml-2 md:mr-3">Crear nuevo usuario</span>
      </button>
      {/* <button
        onClick={handleOpenModal}
        className="bg-[#555A88] text-white p-2 px-4 font-semibold rounded-md hover:bg-blue-600 transition-colors"
      >
        Crear nuevo usuario
      </button> */}
    </header>
  );
};
export default Header;
