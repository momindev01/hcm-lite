
export default function SignupButton({ text, disabled = false }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {text}
    </button>
  );
}
