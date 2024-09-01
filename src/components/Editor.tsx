"use client";
import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import SelectLanguage from "./SelectLanguage";
import Output from "./Output";

const CodeEditor = () => {
  const [code, setCode] = useState("// Start coding here!");
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const handleRunCode = () => {
    // Logic to execute the code and set the output
    setOutput(`Output for ${language}: \n${code}`);
  };

  return (
    <div className="flex flex-col h-screen p-4">
      <header className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">DevPad</h1>
        <SelectLanguage
          selectedLanguage={language}
          onLanguageChange={handleLanguageChange}
        />
        <button
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handleRunCode}
        >
          Run Code
        </button>
      </header>

      <div className="flex-1 flex">
        <div className="flex-1 mr-2 border border-gray-300 rounded">
          <Editor
            height="100%"
            language={language}
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value)}
          />
        </div>
        <div className="w-1/3 ml-2 border border-gray-300 rounded bg-white">
          <Output output={output} />
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
