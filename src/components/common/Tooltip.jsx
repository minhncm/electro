import * as TooltipPrimitive from "@radix-ui/react-tooltip";

function Tooltip({ children, content }) {
  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content sideOffset={4}>
            <div className="bg-[#101010e6] rounded-md flex items-center">
              <div className="flex items-center px-2.5 py-1.5 text-white text-sm">
                {content}
              </div>
            </div>
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}

export default Tooltip;
