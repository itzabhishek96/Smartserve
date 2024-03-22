"use client"

import { useEffect, useState } from "react";
import Select from "react-select";
import { FaExchangeAlt } from "react-icons/fa";
import { getLanguages, translateText } from "../../api/translate/route";
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import logo from "../../../public/logo.png"; // Import SmartServe logo image
import Hero from '@/components/hero'
import AiForm from '@/components/ai-form'
import { SiteHeader } from '@/components/site-header'
import "./translate.css";

interface LanguageOption {
  value: string;
  label: string;
}

const TranslateComponent: React.FC = () => {
  const [languages, setLanguages] = useState<LanguageOption[]>([]);
  const [sourceLang, setSourceLang] = useState<LanguageOption>({
    value: "tr",
    label: "Input",
  });
  const [targetLang, setTargetLang] = useState<LanguageOption>({
    value: "en",
    label: "Output",
  });
  const [text, setText] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText("");
    setAnswer("");
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const languages = await getLanguages();
        setLanguages(languages);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };
    fetchLanguages();
  }, []);

  const handleTranslate = async () => {
    setLoading(true);
    try {
      const translatedText = await translateText({ sourceLang, targetLang, text });
      setAnswer(translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    } finally {
      setLoading(false);
    }
  };
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        const scrollThreshold = 0
  
        setIsScrolled(scrollPosition > scrollThreshold)
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])

  return  (
//     <>
//   <header className="bg-gray-900 text-white py-4">
//     <div className="container flex items-center justify-between">
//       <Link href="/dashboard" className="flex items-center text-2xl font-bold space-x-2">
//         <img src="logo.png" alt="SmartServe Logo" className="h-8" />
//         <span>SmartServe</span>
//       </Link>
//     </div>
//   </header>
//   <div className="bg-gray-900 text-white min-h-screen flex justify-center mt-4">
//     <div id="main-page" className="container mx-auto">
//       <h1 className="text-3xl font-bold mb-2">SmartServe Translator</h1>
//       <p className="text-sm text-gray-300 mb-4">Translate text into different languages</p>
//       <div className="flex items-center space-x-4 mb-4">
//         <Select
//           onChange={(selectedOption) => setSourceLang(selectedOption as LanguageOption)}
//           className="react-select bg-gray-700 text-black flex-grow"
//           options={languages}
//           value={sourceLang}
//           placeholder="Source"
//         />
//         <button onClick={handleChange} className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-all">
//           <FaExchangeAlt className="icon" />
//         </button>
//         <Select
//           onChange={(selectedOption) => setTargetLang(selectedOption as LanguageOption)}
//           className="react-select bg-gray-700 text-black flex-grow"
//           options={languages}
//           value={targetLang}
//           placeholder="Target"
//         />
//       </div>
//       <textarea
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         className="w-full p-4 bg-blue-950 text-white placeholder-gray-400 placeholder-opacity-75 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//         placeholder="Enter text to translate"
//         rows={6}
//       />
//       <textarea
//         className="w-full p-4 bg-blue-950 text-white placeholder-gray-400 placeholder-opacity-75 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
//         value={answer}
//         disabled
//         rows={6}
//         placeholder="Translation output"
//       />
//       <button
//         className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//         onClick={handleTranslate}
//         disabled={loading}
//       >
//         {loading ? "Translating..." : "Translate"}
//       </button>
//     </div>
//   </div>
// </>


<>
  <header className="bg-gray-900 text-white py-4">
    <div className="container flex items-center justify-between">
      <Link href="/dashboard" className="flex items-center text-2xl font-bold space-x-2">
        <img src="logo.png" alt="SmartServe Logo" className="h-8" />
        <span>SmartServe</span>
      </Link>
    </div>
  </header>
  <div className="bg-gray-900 text-white min-h-screen flex justify-center mt-4">
    <div id="main-page" className="container mx-auto">
      <h1 className="text-3xl font-bold mb-2">Multilingual Translator</h1>
      <p className="text-sm text-gray-300 mb-4">Translate text into different languages</p>
      <div className="flex items-center space-x-4 mb-4">
        <Select
          onChange={(selectedOption) => setSourceLang(selectedOption as LanguageOption)}
          className="react-select bg-gray-700 text-black flex-grow"
          options={languages}
          value={sourceLang}
          placeholder="From"
        />
        <button onClick={handleChange} className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-all">
          <FaExchangeAlt className="icon" />
        </button>
        <Select
          onChange={(selectedOption) => setTargetLang(selectedOption as LanguageOption)}
          className="react-select bg-gray-700 text-black flex-grow"
          options={languages}
          value={targetLang}
          placeholder="To"
        />
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 bg-blue-950 text-white placeholder-gray-400 placeholder-opacity-75 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="Enter text to translate"
        rows={6}
      />
      <textarea
        className="w-full p-4 bg-blue-950 text-white placeholder-gray-400 placeholder-opacity-75 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        value={answer}
        disabled
        rows={6}
        placeholder="Translation output"
      />
      <button
        className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        onClick={handleTranslate}
        disabled={loading}
      >
        {loading ? "Translating..." : "Translate"}
      </button>
    </div>
  </div>
</>


  
  );
};

export default TranslateComponent;
