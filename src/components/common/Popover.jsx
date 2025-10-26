import * as PopoverPrimitive from "@radix-ui/react-popover";
function Popover({ children, trigger }) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={10}
          className="w-[1288px] h-[468px] p-4 bg-white rounded-lg border border-solid border-[#e9ecef]"
        >
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

export default Popover;
