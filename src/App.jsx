import React, { useState } from "react";
import axios from "axios";
import UploadForm from "./components/UploadForm";
import ResultCard from "./components/ResultCard";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function handleAnalyze(formData) {
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:4000/api/analyze",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <h1>AI Resume Analyzer</h1>

      <UploadForm onAnalyze={handleAnalyze} disabled={loading} />

      {loading && <p className="loader">Analyzing… Please wait</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {result && <ResultCard data={result} />}
    </div>
  );
}
