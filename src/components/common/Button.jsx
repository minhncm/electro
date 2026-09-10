import { tv } from "tailwind-variants";
import { Link } from "react-router-dom";

const button = tv({
  base: "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-200 whitespace-normal overflow-hidden",
  variants: {
    variant: {
      text: "bg-transparent text-c-blue hover:bg-soft",
      container: "bg-primary text-white hover:bg-[#1c7ed6]",
      outline: "border border-primary text-c-blue hover:bg-soft",
    },
    size: {
      xs: "w-auto h-[22px] px-[7px] text-xs rounded",
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

function Button({
  icon,
  to,
  variant,
  size,
  children,
  className,
  ...passProps
}) {
  const props = {
    ...passProps,
  };
  let Comp = "button";
  if (to) {
    props.to = to;
    Comp = Link;
  }
  return (
    <Comp {...props} className={button({ variant, size, className })}>
      <div className="flex justify-center items-center h-full">
        {icon && <span className="flex items-center mr-2.5">{icon}</span>}
        <span className="flex items-center h-full whitespace-normal overflow-hidden">
          {children}
        </span>
      </div>
    </Comp>
  );
}

export default Button;
