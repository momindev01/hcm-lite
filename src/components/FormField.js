export default function FormField({
  label,
  type,
  placeholder,
  value,
  onChange
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-lg p-3 outline-blue-500"
      />
    </div>
  );
}