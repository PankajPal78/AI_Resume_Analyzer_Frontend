import React, { useState } from "react";

export default function UploadForm({ onAnalyze, disabled }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    const file = e.target.file.files[0];

    if (file) {
        formData.append("file", file);
    } else if (text.trim()) {
        formData.append("text", text);
    } else {
        alert("Please upload a file or enter text");
        return;
    }

    onAnalyze(formData);
    }

    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <label><b>Upload Resume (PDF or TXT)</b></label>
        <input type="file" name="file" accept=".pdf,.txt" disabled={disabled} />

        <p style={{ textAlign: "center", opacity: 0.6 }}>OR</p>

        <label><b>Paste Resume Text</b></label>
        <textarea
        rows="5"
        disabled={disabled}
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button type="submit" disabled={disabled} style={{ marginTop: 10 }}>
        Analyze Resume
        </button>
    </form>
    );
}
