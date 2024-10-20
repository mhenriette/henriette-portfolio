import { ChangeEvent } from "react";

export default function Input({
  id,
  label,
  type,
  textArea,
  name,
  onChange,
  value
}: {
  id: string;
  label?: string;
  type?: string;
  textArea?: boolean;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value?: string;
}) {
  return (
    <div className="relative z-0 w-full mb-7 group">
      {textArea ? (
        <textarea
          id="message"
          rows={6}
          name={name}
          className="block w-full text-sm text-white outline-none bg-transparent border-2 border-[#92A1B6] appearance-none focus:outline-none focus:ring-0 focus:border-secondary p-1.5 rounded-sm focus:shadow-[0_0_0_2px_rgba(242,95,76,0.2)] autofill:bg-transparent autofill:text-white"
          placeholder="Leave a message"
          onChange={onChange}
          value={value}
          required
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
          className="block pt-5 pb-2.5 px-0 w-full text-sm outline-none text-white bg-transparent border-0 border-b-2 border-[#92A1B6] appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer autofill:bg-transparent autofill:text-white"
          placeholder=" "
          required
        />
      )}
      <label
        htmlFor={id}
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-2 left-0 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
      >
        {label}
      </label>
    
    </div>
  );
}
