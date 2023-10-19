import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import { EMAIL_VALIDATIONS, FIRSTNAME_VALIDATIONS, LASTNAME_VALIDATIONS, PASSWORD_VALIDATIONS } from "../constants/formValidations";
import ErrorValidation from "./ErrorValidation";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idCarToEdit,
  errors,
}) => {
  console.log(errors);

  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 text-[#0F0F2D] flex justify-center items-center px-3 transition-all duration-300 ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative"
      >
        <h2 className="text-center text-lg font-semibold">
          {idCarToEdit ? "Actualizar usuario" : "Crear usuario"}
        </h2>
        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 hover:text-red-600 transition-colors absolute top-2 right-2"
        >
          <IconSquareRoundedXFilled />
        </button>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="first_name">
            Nombre(s)
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="first_name"
            type="text"
            autoComplete="off"
            {...register("first_name", FIRSTNAME_VALIDATIONS)}
          />
          <ErrorValidation input={"first_name"} errors={errors}/>
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="last_name">
            Apellido(s)
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="last_name"
            type="text"
            autoComplete="off"
            {...register("last_name", LASTNAME_VALIDATIONS)}
          />
          <ErrorValidation input={"last_name"} errors={errors}/>
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="email">
            Correo
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="email"
            type="text"
            autoComplete="off"
            {...register("email",EMAIL_VALIDATIONS)}
          />
          <ErrorValidation input={"email"} errors={errors}/>
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="password">
            Contraseña
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="password"
            type="text"
            autoComplete="off"
            {...register("password",PASSWORD_VALIDATIONS)}
          />
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="birthday">
            Cumpleaños
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="birthday"
            type="date"
            autoComplete="off"
            {...register("birthday")}
          />
        </div>
        <button
          className="bg-[#555A88] hover:bg-[#727ac0] text-white p-2 px-4 uppercase font-semibold rounded-sm"
          type="submit"
        >
          {idCarToEdit ? "Guardar cambios" : "Crear"}
        </button>
      </form>
    </section>
  );
};
export default Modal;
