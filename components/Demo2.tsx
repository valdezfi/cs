"use client";

import React from "react";

export default function DemoEmbed() {
  return (
    <div
      style={{
        position: "relative",
        boxSizing: "content-box",
        maxHeight: "80vh",
        maxWidth: "100%",
        aspectRatio: "2.21 / 1",
        padding: "40px 0",
      }}
    >
      <iframe
        src="https://app.supademo.com/embed/cmeytxutx9329v9kqsni4lwbq?embed_v=2&utm_source=embed"
        loading="lazy"
        title="How to navigate the Grandeapp interface"
        allow="clipboard-write"
        frameBorder="0"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "0",
        }}
      />
    </div>
  );
}
