export function Textarea({ placeholder, value, onChange }) {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Contenu
      </label>
      <textarea
        id="content"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></textarea>
    </div>
  );
}

export default Textarea;
