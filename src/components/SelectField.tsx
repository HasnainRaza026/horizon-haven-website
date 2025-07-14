import { UseFormRegisterReturn } from "react-hook-form";

interface OptionsField {
  value: string;
  text: string;
}

export default function SelectField({
  lable,
  id,
  error,
  options,
  register,
}: {
  lable: string | (() => React.ReactNode);
  id: string;
  error: string;
  options: OptionsField[];
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
      <select
        id={id}
        {...register}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a subject</option>
        {options.map((item: OptionsField) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
