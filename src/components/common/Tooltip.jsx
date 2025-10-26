import * as TooltipPrimitive from "@radix-ui/react-tooltip";

function Tooltip({ children, content, side, align, sideOffset = 4 }) {
  return (
    <TooltipPrimitive.Provider delayDuration={150}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            sideOffset={sideOffset}
            side={side}
            align={align}
          >
            <div className="bg-[#101010e6] dark:bg-[#e2e2e2] rounded-md flex items-center">
              <div className="flex items-center px-2.5 py-1.5 text-white dark:text-black text-sm">
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
