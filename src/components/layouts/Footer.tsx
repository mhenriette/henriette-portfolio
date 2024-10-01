export default function Footer() {
const currentYear = new Date().getFullYear()
  return (
    <div className="bg-primary py-5 flex justify-center items-center text-white border-t border-[#43464F] ">
      <span> © Henriette Munezero {currentYear}</span>
    </div>
  );
}
