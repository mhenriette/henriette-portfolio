export default function Input({
  id,
  label,
  type,
  textArea,
}: {
  id: string;
  label?: string;
  type?: string;
  textArea?: boolean;
}) {
  return (
    <div className="relative z-0 w-full mb-7 group">
      {textArea ? (
        <textarea
          id="message"
          rows={6}
          className="block w-full text-sm text-white bg-transparent border-2 border-[#92A1B6] appearance-none focus:outline-none focus:ring-0 focus:border-secondary p-1.5 rounded-sm"
          placeholder="Leave a message"
        ></textarea>
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#92A1B6] appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
          placeholder=""
          required
        />
      )}
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
}
