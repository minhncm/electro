import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { Link } from "react-router-dom";

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuContent = ({ className, children, ...props }) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      align="end"
      sideOffset={4}
      className={clsx(
        "w-[200px] bg-white border border-solid border-[#e9ecef] ",
        "rounded-md overflow-hidden",
        "shadow-[0_1px_3px_rgba(0,0,0,0.05),_rgba(0,0,0,0.05)_0px_20px_25px_-5px,_rgba(0,0,0,0.04)_0px_10px_10px_-5px]",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
);

export const DropdownMenuItem = ({
  to,
  icon,
  className,
  children,
  component,
  ...props
}) => {
  const Comp = component || "div";
  const isLink = Comp === Link;
  return (
    <DropdownMenuPrimitive.Item asChild {...props}>
      <Comp
        {...(isLink ? { to } : {})}
        className={clsx(
          "flex items-center text-sm px-3 py-2.5 leading-[14px] cursor-pointer select-none outline-none hover:bg-[#f8f9fa] transition-colors",
          className
        )}
      >
        {icon}
        <span className="pl-2">{children}</span>
      </Comp>
    </DropdownMenuPrimitive.Item>
  );
};
