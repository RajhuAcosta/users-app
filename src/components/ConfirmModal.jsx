const ConfirmModal = ({isShowConfirmModal,idUserToDelete,setIsShowConfirmModal,deleteUser}) => {
    return (
        <section
          className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 text-[#0F0F2D] flex justify-center items-center px-3 transition-all duration-300 ${
            isShowConfirmModal ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
            <div className="bg-white py-4 px-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative text-center">
                <span className="px-3 font-bold">¿Está seguro(a) de eliminar este usuario?</span>
                <div className="flex justify-between px-8">
                    <button className="p-2 bg-gray-500 hover:bg-gray-600 text-white"
                     onClick={()=>setIsShowConfirmModal(false)}
                     >Cancelar</button>
                    <button className="p-2 bg-red-500 hover:bg-red-600 text-white"
                     onClick={()=>{deleteUser(idUserToDelete);setIsShowConfirmModal(false)}}
                    >Confirmar</button>
                </div>   
            </div>
        </section>
  )
}

export default ConfirmModal