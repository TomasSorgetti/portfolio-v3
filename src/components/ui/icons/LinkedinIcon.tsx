export default function LinkedinIcon({
  wdith = "32",
  height = "32",
}: {
  wdith?: string;
  height?: string;
}) {
  return (
    <svg
      width={wdith}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4254 24V13.3062H7.99414V24H11.4254ZM9.83789 11.6875C10.9816 11.6875 11.6941 10.8688 11.6941 9.84375C11.6754 8.8 10.9816 8 9.85664 8C8.73164 8 8.00039 8.8 8.00039 9.84375C8.00039 10.8688 8.71289 11.6875 9.81289 11.6875H9.83789Z"
        className="fill-white group-hover:fill-pink transition-colors duration-300"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.0375 13.0625C18.2188 13.0625 17.4375 14.0875 16.9375 14.8V13.3125H13.5V24H16.9375V17.9125C16.9375 17.6 16.9625 17.2875 17.0562 17.0688C17.3062 16.4438 17.8688 15.8 18.8188 15.8C20.0625 15.8 20.5625 16.7562 20.5625 18.1562V24H24V17.7563C24 14.55 22.3 13.0625 20.0375 13.0625Z"
        className="fill-white group-hover:fill-pink transition-colors duration-300"
      />
      <path
        d="M26.075 4H6.05C4.95625 4 4 4.7875 4 5.86875V25.9375C4 27.025 4.95625 27.9937 6.05 27.9937H26.0688C27.1688 27.9937 27.9937 27.0187 27.9937 25.9375V5.86875C28 4.7875 27.1688 4 26.075 4ZM25.875 26H6.19375C6.08125 26 6 25.9125 6 25.8062V6.125C6 6.05625 6.0625 6 6.125 6H25.875C25.9375 6 26 6.0625 26 6.125V25.875C26 25.9312 25.9438 26 25.875 26Z"
        className="fill-white group-hover:fill-pink transition-colors duration-300"
      />
    </svg>
  );
}
