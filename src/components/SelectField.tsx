import { UseFormRegisterReturn } from "react-hook-form";

export default function SelectField({
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
      <select
        id={id}
        {...register}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select a subject</option>
        <option value="reservation">Reservation Inquiry</option>
        <option value="existing">Existing Reservation</option>
        <option value="amenities">Hotel Amenities</option>
        <option value="events">Events & Special Occasions</option>
        <option value="feedback">Feedback</option>
        <option value="other">Other</option>
      </select>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}
