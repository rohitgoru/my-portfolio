const PrimaryButton = ({ className, children, onClick, icon = true }) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 h-[48px] sm:h-[55px] primary-btn-bg w-full hover:scale-95  cursor-pointer  transtion duration-300 ease-in-out  text-white text-base font-medium px-4 py-4 rounded-xl sm:rounded-2xl ${className}`}
    >
      {children}
      {icon && (
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M0.292893 11.2929C-0.0976311 11.6834 -0.0976311 12.3166 0.292893 12.7071C0.683418 13.0976 1.31658 13.0976 1.70711 12.7071L1 12L0.292893 11.2929ZM13 1C13 0.447715 12.5523 2.00008e-07 12 -5.28728e-08L3 7.47917e-07C2.44771 4.10743e-07 2 0.447716 2 1C2 1.55228 2.44772 2 3 2L11 2L11 10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10L13 1ZM1 12L1.70711 12.7071L12.7071 1.70711L12 1L11.2929 0.292894L0.292893 11.2929L1 12Z"
              fill="white"
            />
          </svg>
        </span>
      )}
    </button>
  );
};

export default PrimaryButton;
