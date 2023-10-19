const ErrorValidation = ({errors,input}) => {
  return (
    <>
      {errors[input] && (
        <span className="text-xs text-red-500">{errors[input].message}</span>
      )}
    </>
  )
}

export default ErrorValidation