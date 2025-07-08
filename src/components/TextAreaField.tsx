import { UseFormRegisterReturn } from "react-hook-form";

export default function TextAreaField({
  lable,
  id,
  error,
  register,
}: {
  lable: string;
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
        {lable}
      </label>
      <textarea
        id={id}
        rows={5}
        {...register}
        placeholder="Please tell us how we can help you..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
      {error && <span className="text-red-500"> - {error}</span>}
    </div>
  );
}
