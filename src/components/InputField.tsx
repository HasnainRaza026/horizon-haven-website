import { UseFormRegisterReturn } from "react-hook-form";

export default function InputField({
  lable,
  type,
  id,
  error,
  register,
}: {
  lable: string | (() => React.ReactNode);
  type: string;
  id: string;
  error: string;
  register: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {typeof lable === "function" ? lable() : lable}
      </label>
      <input
        type={type}
        id={id}
        {...register}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
