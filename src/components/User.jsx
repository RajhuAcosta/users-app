import { IconPencil, IconCake, IconTrash, IconMail } from "@tabler/icons-react";

const User = ({ userInfo, setIsShowConfirmModal, setIdUserToDelete, handleClickUpdate }) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-3">
      <h5 className="flex gap-2 items-center capitalize text-lg font-bold text-[#0F0F2D]">
        {userInfo.first_name} {userInfo.last_name}
      </h5>
      <ul className="grid gap-1 text-gray-800">
        {/* <li>
          <span className="font-semibold">Correo:</span> {userInfo.email}
        </li> */}
        {/* <li>
          <span className="font-semibold">Contraseña:</span> {userInfo.password}
        </li> */}
        <li>
          <span className="font-semibold">Correo:</span>
        </li>
        <li className="flex items-center ">
          <IconMail size={20} /> <span className="ml-1 text-[#302F2F]">{userInfo.email}</span>
        </li>
        <li>
          <span className="font-semibold">Cumpleaños:</span>
        </li>
        <li className="flex items-center">
          <IconCake size={20} /> <span className="ml-1 text-[#302F2F]">{userInfo.birthday}</span>
        </li>
      </ul>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => {
            setIsShowConfirmModal(true);
            setIdUserToDelete(userInfo.id);
          }}
          className="bg-[#D85D5D] hover:bg-red-600 transition-colors text-white p-1 rounded-md"
        >
          <IconTrash size={20} />
        </button>
        <button
          onClick={() => handleClickUpdate(userInfo)}
          className="bg-[#7bda6f] hover:bg-green-600 transition-colors text-white p-1 rounded-md"
        >
          <IconPencil size={20} />
        </button>
      </div>
    </article>
  );
};
export default User;
