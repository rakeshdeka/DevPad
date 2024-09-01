"use client";
import { useState } from "react";

const languages = [
  ["JavaScript", "ES6+"],
  ["Python", "3.9"],
  ["Java", "11"],
  ["C++", "17"],
  ["Go", "1.16"],
];

const ACTIVE_COLOR = "bg-blue-500 text-white";

const SelectLanguage = () => {
  const [language, setLanguage] = useState(languages[0][0]);
  const [isOpen, setIsOpen] = useState(false);

  const onSelect = (selectedLang) => {
    setLanguage(selectedLang);
    setIsOpen(false); 
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ml-2 mb-4">
      <p className="mb-2 text-lg">Language:</p>
      <div className="relative inline-block text-left">
        <button
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          {language}
        </button>
        {isOpen && (
          <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-[#110c1b] rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {languages.map(([lang, version]) => (
                <button
                  key={lang}
                  className={`${
                    lang === language ? ACTIVE_COLOR : "text-white"
                  } block w-full text-left px-4 py-2 text-sm hover:${ACTIVE_COLOR} ${
                    lang === language ? "bg-gray-900" : "bg-transparent"
                  }`}
                  onClick={() => onSelect(lang)}
                >
                  {lang}
                  &nbsp;
                  <span className="text-gray-600 text-sm">({version})</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectLanguage;
