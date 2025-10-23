import { tv } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 whitespace-normal overflow-hidden",
  variants: {
    variant: {
      text: "bg-transparent text-[#228be6] hover:bg-[#e7f5ff]",
      container: "bg-[#228be6] text-white hover:bg-[#1c7ed6]",
      outline: "border border-[#228be6] text-[#228be6] hover:bg-[#e7f5ff]",
    },
    size: {
      default: "w-auto h-[42px] px-[22px]",
      sm: "w-auto h-9 px-[18px] text-sm",
      lg: "w-auto h-[50px] px-[26px] text-lg",
    },
  },
  defaultVariants: {
    variant: "container",
    size: "default",
  },
});

function Button({ variant, size, children, className, ...props }) {
  return (
    <button {...props} className={button({ variant, size, className })}>
      <span className="flex items-center h-full whitespace-normal overflow-hidden">
        {children}
      </span>
    </button>
  );
}

export default Button;
