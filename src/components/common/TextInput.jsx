import clsx from "clsx";

function TextInput({ icon, placeholder, width, className, ...props }) {
  return (
    <div
      className={clsx("relative leading-[1.55] flex-grow-0", `w-[${width}px]`)}
    >
      <div
        className="flex items-center justify-center w-[42px] pointer-events-none 
                        absolute z-[1] left-0 top-0 bottom-0 text-[#adb5bd]"
      >
        {icon && <span>{icon}</span>}
      </div>
      <input
        {...props}
        className={clsx(
          "w-full pl-[42px] py-[1px] pr-[14px] rounded-lg leading-[40px] text-left",
          className
        )}
        placeholder={placeholder}
      />
    </div>
  );
}

export default TextInput;
