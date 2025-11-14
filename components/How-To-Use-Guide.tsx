"use client";

import React from "react";

export default function HowToUseGrandeApp() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        How to Use GrandeApp in Monday.com
      </h1>

      <ol className="list-decimal ml-6 space-y-4 text-gray-700 dark:text-gray-300 text-lg">
        <li>
          <strong>Install the App:</strong>  
          Go to the Monday.com App Marketplace → search for <strong>GrandeApp</strong> → click <em>Install</em> and select your workspace.
        </li>

        <li>
          <strong>Add to a Board:</strong>  
          Open a board → click <em>“+ Add View”</em> → search for <strong>GrandeApp</strong> → add it.
        </li>

        <li>
          <strong>Sign In:</strong>  
          Inside the view, click <em>“Sign In”</em> and log in with your GrandeApp account (or create one).
        </li>

        <li>
          <strong>Create or Link a Campaign:</strong>  
          Choose an existing campaign or start a new one directly inside Monday.
        </li>

        <li>
          <strong>Track Everything:</strong>  
          Manage creators, deliverables, deadlines, and performance without leaving Monday.
        </li>

        <li>
          <strong>Need Help?</strong>  
          Email: <a href="mailto:info@grandeapp.com" className="text-blue-600 underline">info@grandeapp.com</a>
        </li>
      </ol>
    </div>
  );
}
