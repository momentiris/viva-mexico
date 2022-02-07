export const Spinner = () => (
  <div
    role="status"
    className={`spinner flex justify-center items-center w-full h-full text-gray-200`}
  >
    <span className="w-12 animate-spin">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <g transform="">
          <circle
            strokeWidth="3"
            strokeDasharray="10,10"
            cx="12"
            cy="12"
            r="10"
          />
        </g>
      </svg>
    </span>
  </div>
);
