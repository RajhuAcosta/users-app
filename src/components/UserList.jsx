import User from "./User";

const UserList = ({ users, setIdUserToDelete, setIsShowConfirmModal, handleClickUpdate }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] justify-center max-w-[1000px] mx-auto gap-5 py-10">
      { users.length===0 ? 
      (
        <section className="text-center text-lg font-normal font-[Lato] m-auto pt-[30vh]">
          <div className="block">Aún no tienes ningún usuario</div>
          <div className="block">Crea un nuevo usuario</div>
        </section>
      ) : (
        users.map((user) => (
        <User
          key={user.id}
          userInfo={user}
          setIdUserToDelete={setIdUserToDelete}
          setIsShowConfirmModal={setIsShowConfirmModal}
          handleClickUpdate={handleClickUpdate}
        />
      )))
      }
    </section>
  );
};
export default UserList;
