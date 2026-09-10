function Badge({ children }) {
  return (
    <div
      className="bg-[#e64890] text-white h-4 text-[9px] rounded-[32px] font-bold 
                    inline-flex items-center justify-center px-1.5 leading-[14px]"
    >
      <span>{children}</span>
    </div>
  );
}

export default Badge;
