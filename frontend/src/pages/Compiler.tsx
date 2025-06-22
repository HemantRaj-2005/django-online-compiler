import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@monaco-editor/react";
import axios from "axios";
import { useState } from "react";

export default function Compiler() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/api/compile/", {
        code,
        input,
        language: "python",
      });
      setOutput(res.data.output || res.data.error);
    } catch(error) {
      setOutput("Error in running output");
    }
    setLoading(false);
  };
  return (
    <div className="p-4 grid grid-cols-1 gap-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold"> Online Python Compiler</h1>
      <Editor
        height="300px"
        defaultLanguage="python"
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vscode-dark"
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
