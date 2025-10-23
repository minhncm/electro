function WrapperTooltip({ children }) {
  return (
    <div className="bg-[#101010e6] rounded-md flex items-center">
      <div className="flex items-center px-2.5 py-1.5 text-white text-sm">
        {children}
      </div>
    </div>
  );
}

export default WrapperTooltip;
