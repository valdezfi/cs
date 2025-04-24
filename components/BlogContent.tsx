import React from "react";

export default function BlogContent({ title, content }: { title: string; content: string }) {
  return (
    <article className="prose lg:prose-xl mx-auto mt-16 mb-32">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
}
