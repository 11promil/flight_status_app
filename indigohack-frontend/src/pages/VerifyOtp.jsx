import { useForm } from "react-hook-form";
import { Image } from "../components/Image";
export const VerifyOtp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors}
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="grid md:grid-cols-2 items-center">
      <div className="hidden md:block">
        <Image />
      </div>
      <div className="flex flex-col h-screen justify-center items-center">
        <h2 className="font-bold text-3xl">Verify OTP</h2>
        <span>An otp is sent to your email ! Please verify</span>
        <form
          className="flex flex-col mt-10 w-7/12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="otp">Otp</label>
          <input
            id="otp"
            name="otp"
            type="text"
            maxLength={6}
            placeholder="123456"
            className="border border-gray-400 p-2 my-2 rounded-lg"
            {...register("otp", {
              required: "Otp is required",
              minLength: {
                value: 6,
                message: "Otp must be at least 6 digit number",
              },
              pattern: {
                value: /^\d+$/, 
                message: "Otp must be a number",
              },
            })}
          />
          {errors.otp && (
            <p className="text-red-500">{errors.otp.message}</p>
          )}

          <button
        
            type="submit"
            className="bg-black text-white p-2 my-2 rounded-lg hover:bg-gray-900"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};
