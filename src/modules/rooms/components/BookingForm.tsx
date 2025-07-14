"use client";

import { useState } from "react";
import { Room, Reservation } from "@/modules/rooms/types/roomType";
import { useAuth } from "@/hooks/useAuth";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { FiCalendar, FiMail, FiPhone, FiUser, FiUsers } from "react-icons/fi";
import InputField from "@/components/InputField";
import { useForm } from "react-hook-form";
import SelectField from "@/components/SelectField";

interface BookingFormProps {
  room: Room;
  onSuccess: () => void;
}

export default function BookingForm({ room, onSuccess }: BookingFormProps) {
  const { user } = useAuth();
  const [reservations, setReservations] = useLocalStorage<Reservation[]>(
    "reservations",
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  const [formData, setFormData] = useState({
    guestName: user?.name || "",
    guestEmail: user?.email || "",
    guestPhone: user?.phone || "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const nights = Math.ceil(
        (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      const newReservation: Reservation = {
        id: Date.now().toString(),
        roomId: room.id,
        guestName: formData.guestName,
        guestEmail: formData.guestEmail,
        guestPhone: formData.guestPhone,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        totalPrice: room.price * nights,
        status: "confirmed",
        createdAt: new Date().toISOString(),
        specialRequests: formData.specialRequests,
      };

      setReservations([...reservations, newReservation]);
      onSuccess();
    } catch (error) {
      console.error("Error creating reservation:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const today = new Date().toISOString().split("T")[0];
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">Booking Summary</h3>
        <div className="text-sm text-blue-800">
          <p>
            {room.name} - ${room.price}/night
          </p>
          <p>Capacity: {room.capacity} guests</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          lable={() => (
            <div className="flex items-center space-x-1">
              <FiUser className="w-4 h-4 inline mr-1" />
              Guest Name
            </div>
          )}
          type="text"
          id="guestName"
          register={register("guestName", {
            required: "This field is required",
          })}
          error={
            typeof errors?.guestName?.message === "string"
              ? errors.guestName.message
              : ""
          }
        />

        <InputField
          lable={() => (
            <div className="flex items-center space-x-1">
              <FiMail className="w-4 h-4 inline mr-1" />
              Email Address
            </div>
          )}
          type="email"
          id="guestEmail"
          register={register("guestEmail", {
            required: "This field is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={
            typeof errors?.guestName?.message === "string"
              ? errors.guestName.message
              : ""
          }
        />

        <InputField
          lable={() => (
            <div className="flex items-center space-x-1">
              <FiPhone className="w-4 h-4 inline mr-1" />
              Phone Number
            </div>
          )}
          type="tel"
          id="guestPhone"
          register={register("guestPhone", {
            required: "This field is required",
            pattern: {
              value: /^\+?[1-9]\d{1,14}$/,
              message: "Invalid phone number",
            },
          })}
          error={
            typeof errors?.phone?.message === "string"
              ? errors.phone.message
              : ""
          }
        />

        <SelectField
          lable={() => (
            <div className="flex items-center space-x-1">
              <FiUsers className="w-4 h-4 inline mr-1" />
              Number of Guests
            </div>
          )}
          id="guests"
          options={[
            { value: "reservation", text: "Reservation Inquiry" },
            { value: "existing", text: "Existing Reservation" },
            { value: "amenities", text: "Hotel Amenities" },
            { value: "events", text: "Events & Special Occasions" },
            { value: "feedback", text: "Feedback" },
            { value: "other", text: "other" },
          ]}
          error={
            typeof errors?.subject?.message === "string"
              ? errors.subject.message
              : ""
          }
          register={register("subject", {
            required: "This field is required",
          })}
        />
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiUsers className="w-4 h-4 inline mr-1" />
            Number of Guests
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Array.from({ length: room.capacity }, (_, i) => i + 1).map(
              (num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              )
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiCalendar className="w-4 h-4 inline mr-1" />
            Check-in Date
          </label>
          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleInputChange}
            min={today}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FiCalendar className="w-4 h-4 inline mr-1" />
            Check-out Date
          </label>
          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleInputChange}
            min={formData.checkIn || tomorrowStr}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Requests (Optional)
        </label>
        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Any special requests or preferences..."
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Room Rate:</span>
          <span className="text-sm text-gray-900">${room.price}/night</span>
        </div>
        {formData.checkIn && formData.checkOut && (
          <>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Number of Nights:</span>
              <span className="text-sm text-gray-900">
                {Math.ceil(
                  (new Date(formData.checkOut).getTime() -
                    new Date(formData.checkIn).getTime()) /
                    (1000 * 60 * 60 * 24)
                )}
              </span>
            </div>
            <div className="flex justify-between items-center font-semibold text-lg border-t pt-2">
              <span>Total:</span>
              <span className="text-blue-600">
                $
                {room.price *
                  Math.ceil(
                    (new Date(formData.checkOut).getTime() -
                      new Date(formData.checkIn).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}
              </span>
            </div>
          </>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Processing..." : "Book Now"}
      </button>
    </form>
  );
}
