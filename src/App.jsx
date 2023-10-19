import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, EMPTY_FORM_VALUES } from "./constants/users";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";
import ConfirmModal from "./components/ConfirmModal";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowConfirmModal, setIsShowConfirmModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [idUserToEdit, setIdUserToEdit] = useState(null);
  const [idUserToDelete, setIdUserToDelete] = useState(null);

  const { handleSubmit, register, reset, formState } = useForm();
  const { errors } = formState;

  const submit = (data) => {
    if (idUserToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleClosedModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setIdUserToEdit(null);
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        handleClosedModal();
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };

  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${idUserToEdit}/`, data)
      .then(() => {
        getAllUsers();
        handleClosedModal();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal();
    reset(userToUpdate);
    setIdUserToEdit(userToUpdate.id);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="min-h-screen">
      <Header handleOpenModal={handleOpenModal} />
      <Modal
        isShowModal={isShowModal}
        handleClosedModal={handleClosedModal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        idUserToEdit={idUserToEdit}
        errors={errors}
      />
      <ConfirmModal
        isShowConfirmModal={isShowConfirmModal}
        deleteUser={deleteUser}
        idUserToDelete={idUserToDelete}
        setIsShowConfirmModal={setIsShowConfirmModal}
      />
      <UserList
        users={users}
        setIdUserToDelete={setIdUserToDelete}
        setIsShowConfirmModal={setIsShowConfirmModal}
        handleClickUpdate={handleClickUpdate}
      />
    </main>
  );
}

export default App;
