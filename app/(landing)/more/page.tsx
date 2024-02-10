// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <header className="bg-gray-900 py-4">
//         <div className="container mx-auto flex items-center justify-between">
//           <a href="#" className="flex items-center">
//             <img className="w-8 h-8" src="logo.png" alt="Logo" />
//             <div className="text-xl font-bold ml-2">Smartserve</div>
//           </a>
//         </div>
//       </header>

//       <section className="min-h-[300px] py-10 text-center">
//         <div className="container mx-auto">
//           <h1 className="text-4xl font-bold mb-4">
//             <span className="text-4xl text-gray-300 mb-8">
//               Explore the Power of AI
//             </span>
//           </h1>
//           <p className="text-lg text-gray-300 mb-8">
//             Harness the limitless potential of AI through our cutting-edge AI <br></br>SaaS platform, where innovation meets seamless functionality.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {generateFeature("Multiplatform Job Search", "Find your dream job across multiple platforms with our powerful job search tools")}
//           {generateFeature("Text Summarization", "Summarize texts quickly & efficiently using our text summarization tech")}
//           {generateFeature("Multilingual Translation", "Translate content effortlessly across multiple languages ")}
//           {generateFeature("Resume Builder Platform", "Create professional resumes in minutes with our easy-to-use resume builder tool")}
//         </div>
//       </div>
//     </div>
//   );
// };

// function generateFeature(title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined, description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined) {
//   return (
//     <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
//       <h2 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
//       <p className="text-gray-300">{description}</p>
//       <button className="mt-4 text-white bg-gray-900 hover:bg-gray-800 py-2 px-4 rounded-full transition duration-300">
//         Explore
//       </button>
//     </div>
//   );
// }

// export default LandingPage;




// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const LandingPage = () => {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       <header className="bg-gray-900 py-4">
//         <div className="container mx-auto flex items-center justify-between">
//           <a href="#" className="flex items-center">
//             <Image className="w-8 h-8" src="logo.png" alt="Logo" />
//             <div className="text-xl font-bold ml-2">Smartserve</div>
//           </a>
//         </div>
//       </header>

//       <section className="min-h-[300px] py-10 text-center">
//         <div className="container mx-auto">
//           <h1 className="text-4xl font-bold mb-4">
//             <span className="text-4xl text-gray-300 mb-8">
//               Explore the Power of AI
//             </span>
//           </h1>
//           <p className="text-lg text-gray-300 mb-8">
//             Harness the limitless potential of AI through our cutting-edge AI <br></br>SaaS platform, where innovation meets seamless functionality.
//           </p>
//         </div>
//       </section>

//       <div className="container mx-auto py-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {generateFeature("Multiplatform Job Search", "Find your dream job across multiple platforms with our powerful job search tools")}
//           {generateFeature("Text Summarization", "Summarize texts quickly & efficiently using our text summarization tech")}
//           {generateFeature("Multilingual Translation", "Translate content effortlessly across multiple languages ")}
//           {generateFeature("Resume Builder Platform", "Create professional resumes in minutes with our easy-to-use resume builder tool")}
//         </div>
//       </div>
//     </div>
//   );
// };

// function generateFeature(title: string | number | boolean | React // const LandingPage = () => {
//   .ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined, description: string | number | boolean | React // const LandingPage = () => {
//   .ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.PromiseLikeOfReactNode | null | undefined) {
//   return (
//     <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
//       <h2 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
//       <p className="text-gray-300">{description}</p>
//       <Link href="http://localhost:3001">
//         <div className="mt-4 text-white bg-gray-900 hover:bg-gray-800 py-2 px-4 rounded-full transition duration-300">
//           Explore
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default LandingPage;

import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="bg-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center">
              <img className="w-8 h-8" src="logo.png" alt="Logo" />
              <div className="text-xl font-bold ml-2">Smartserve</div>
            </div>
          </Link>
        </div>
      </header>

      <section className="min-h-[300px] py-10 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-4xl text-gray-300 mb-8">
              Explore the Power of AI
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Harness the limitless potential of AI through our cutting-edge AI
            <br></br>SaaS platform, where innovation meets seamless functionality.
          </p>
        </div>
      </section>

      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {generateFeature("Multiplatform Job Search", "Find your dream job across multiple platforms with our powerful job search tools", "/url=%2Fjobs")}
          {generateFeature("Text Summarization", "Summarize texts quickly & efficiently using our text summarization tech", "/app")}
          {generateFeature("Multilingual Translation", "Translate content effortlessly across multiple languages", "/translator")}
          {generateFeature("Resume Builder Platform", "Create professional resumes in minutes with our easy-to-use resume builder tool", "/resume")}
        </div>
      </div>
    </div>
  );
};

function generateFeature(
  title: string,
  description: string,
  url: string
) {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">{title}</h2>
      <p className="text-gray-300">{description}</p>
      <br />
      <Link href={url}>
        <div className="mt-4 text-white bg-gray-900 hover:bg-gray-800 pd-3 py-2 px-3 rounded-full transition duration-300">Explore</div>
      </Link>
    </div>
  );
}

export default LandingPage;