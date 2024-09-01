"use client";
import React, { useState } from "react";
import { Monaco } from "@monaco-editor/react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const [code, setCode] = useState("// Start coding here!");

  return (
    <div style={{ height: "90vh", border: "1px solid #ccc" }}>
      <Editor
        height="100%"
        language="javascript"
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value)}
      />
    </div>
  );
};

export default CodeEditor;
