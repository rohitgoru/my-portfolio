import React from "react";

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="flex flex-col md:flex-row justify-center gap-4 md:justify-between items-center py-6 text-sm text-[#E4ECFF]  max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#121631] mt-14 "
    >
      <p class="text-center text-sm text-[#E4ECFF]">
        © <span data-current-year="">2026</span> Flow Design LLC
      </p>
      <div className="flex justify-center items-center gap-5">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rohit-choudhary-358480285/"
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.37 4.28 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/rohitgoru"
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5z" />
          </svg>
        </a>

        {/* Gmail */}
        <a
          href="mailto:rohit780790809@gmail.com"
          className="hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 5h18v14H3V5z" stroke="currentColor" strokeWidth="2" />
            <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="2" />
          </svg>
        </a>

        {/* Fiverr */}
        <a
          href="https://www.fiverr.com/rohitchoudha334/buying?source=avatar_menu_profile"
          target="_blank"
          rel="noreferrer"
          className="hover:-translate-y-1 transition duration-300 ease-in-out"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
