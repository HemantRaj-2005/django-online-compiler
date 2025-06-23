import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-tomorrow_night_bright";
import "ace-builds/src-noconflict/theme-github";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Compiler() {
  const [code, setCode] = useState("# Write Python code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("tomorrow_night_bright");

  // Detect theme changes
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setTheme(isDarkMode ? "tomorrow_night_bright" : "github");

    const observer = new MutationObserver(() => {
      const newIsDarkMode = document.documentElement.classList.contains("dark");
      setTheme(newIsDarkMode ? "tomorrow_night_bright" : "github");
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const runCode = async () => {
    setLoading(true);
    try {
      const res = await axios.post("https://django-online-compiler.onrender.com/api/compile/", {
        code,
        input,
        language: "python",
      });
      setOutput(res.data.output || res.data.error);
    } catch (error) {
      setOutput("Error in running output");
    }
    setLoading(false);
  };

  return (
    <div className="p-4 grid grid-cols-1 gap-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold">Online Python Compiler</h1>
      <AceEditor
        mode="python"
        theme={theme}
        onChange={(value) => setCode(value)}
        value={code}
        height="300px"
        width="100%"
        setOptions={{
          showLineNumbers: true,
          tabSize: 4,
          fontSize: 16,
        }}
      />
      <Textarea
        placeholder="Enter your custom input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="h-24"
      />
      <Button onClick={runCode} disabled={loading}>
        {loading ? "Ruko Zaraa..." : "Run Code"}
      </Button>
      <Textarea
        value={output}
        readOnly
        className="h-40 text-green-400"
        placeholder="Output will appear here"
      />
    </div>
  );
}