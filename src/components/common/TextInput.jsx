function TextInput({ icon, placeholder }) {
  return (
    <div className="relative w-[600px] leading-[1.55] flex-grow-0">
      <div
        className="flex items-center justify-center w-[42px] pointer-events-none 
                        absolute z-[1] left-0 top-0 bottom-0 text-[#adb5bd]"
      >
        {icon && <span>{icon}</span>}
      </div>
      <input
        className="w-full pl-[42px] py-[1px] pr-[14px] bg-surface rounded-lg 
                     leading-[40px] text-left outline-[#339af0]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
