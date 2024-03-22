// import React from "react";

// const PageTitle = ({ title = "Smartserve: Let's find your dream job" }) => {
//   return (
//     <div className="flex flex-col gap-2 md:gap-4">
//       <h1 className="headline-2 font-bold text-3xl text-white mt-2 tracking-wide">{title}</h1>
//       {/* Current Date */}
//       <p className="body-8 text-white tracking-wide text-natural-6">
//         {new Date().toLocaleString("en-us", {
//           weekday: "long",
//           month: "short",
//           day: "2-digit",
//           year: "numeric",
//         })}
//       </p>
//     </div>
//   );
// };

// export default PageTitle;
import Link from "next/link";




import React from "react";

const PageTitle = ({ title = "Let's find your dream job" }) => {
  return (
    <>
    <div>
      <Link href="/dashboard">
        <div className="flex items-center mt-2">
          <img className="h-10" src="logo.png" alt="Logo" />
          <div className="text-3xl ml-2 text-white">Smartserve</div>
        </div>
      </Link>
    </div>
    <div className="flex flex-col gap-2 md:gap-4 items-center">
      <h1 className="headline-2 font-bold text-3xl text-white mt-1 tracking-wide">{title}</h1>
      {/* Current Date */}
      <p className="body-8 text-white tracking-wide text-natural-6">
        {new Date().toLocaleString("en-us", {
          weekday: "long",
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
    </>
  );
};

export default PageTitle;



