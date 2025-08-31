"use client";

import React from "react";

type SupademoEmbedProps2 = {
  /** Full Supademo embed URL or just the ID */
  src?: string;
  /** Accessible title for the iframe */
  title?: string;
  /** Aspect ratio (width / height). Default matches your snippet. */
  aspectRatio?: number;
  /** Optional extra classNames for the wrapper */
  className?: string;
};

export default function SupademoEmbed({
  src = "https://app.supademo.com/embed/cmeyxrnpy9415v9kqo279px9j?embed_v=2&utm_source=embed",
  title = "Grandeapp Demo",
  aspectRatio = 2.2117882117882117,
  className = "",
}: SupademoEmbedProps2) {
  return (
    <div
      className={`relative w-full max-h-[80vh] max-h-[80svh] ${className}`}
      style={{
        boxSizing: "content-box",
        paddingTop: 40,
        paddingBottom: 40,
        aspectRatio,
      }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allow="clipboard-write"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}
