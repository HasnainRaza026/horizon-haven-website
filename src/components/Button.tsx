export default function Button({
  color,
  padding,
  textSize,
  fontWeight,
  customStyles,
  type,
  children,
}: {
  color: string;
  padding?: string;
  textSize?: string;
  fontWeight?: string;
  customStyles?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}) {
  return (
    <button
      type={type || "button"}
      className={`${
        color === "blue"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-white text-gray-900 hover:bg-gray-100"
      } ${padding || "px-4 py-2"} ${textSize || ""} ${fontWeight || ""} ${
        customStyles || ""
      }
      rounded-md transition-colors`}
    >
      {children}
    </button>
  );
}
