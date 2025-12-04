import React from "react";

export default function ResultCard({ data }) {
    return (
    <div style={{ marginTop: 20, padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
        <h2>Analysis Result</h2>

        <p><b>Name:</b> {data.name}</p>
        <p><b>Summary:</b><br />{data.summary}</p>

        <h4>Skills:</h4>
        <ul>
        {data.skills?.map((s, i) => (
            <li key={i}>{s}</li>
        ))}
        </ul>

        <h4>Suggested Roles:</h4>
        <ul>
        {data.roles?.map((r, i) => (
            <li key={i}>{r}</li>
        ))}
        </ul>
    </div>
    );
}
