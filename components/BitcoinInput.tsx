"use client";

import React, { useState } from "react";
import { ChevronDown, DollarSign, Calculator } from "lucide-react";
import { SiBitcoin, SiEthereum, SiTether, SiMonero } from "react-icons/si";

interface Token {
  symbol: string;
  Icon: React.ComponentType<{ className?: string }>;
}

interface AmountInputProps {
  token: Token;
  onTokenClick: () => void;
  value: string;
  onChange: (v: string) => void;
  label: string;
}

function AmountInput({ token, onTokenClick, value, onChange, label }: AmountInputProps) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</span>
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          placeholder="0.0"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="flex-1 bg-transparent placeholder-gray-400 dark:placeholder-gray-600 text-2xl font-medium text-gray-900 dark:text-white focus:outline-none"
        />
        <button onClick={onTokenClick} className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-3 py-1 rounded-lg shadow">
          <token.Icon className="w-6 h-6 text-gray-900 dark:text-white" />
          <span className="text-sm font-semibold text-gray-900 dark:text-white">{token.symbol}</span>
          <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
    </div>
  );
}

export default function BorrowWidget() {
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [inputToken, setInputToken] = useState<Token>({ symbol: "ETH", Icon: SiEthereum });
  const [outputToken, setOutputToken] = useState<Token>({ symbol: "USDC", Icon: DollarSign });
  const [inputOpen, setInputOpen] = useState(false);
  const [outputOpen, setOutputOpen] = useState(false);

  const tokens: Token[] = [
    { symbol: "ETH", Icon: SiEthereum },
    { symbol: "BTC", Icon: SiBitcoin },
    { symbol: "USDT", Icon: SiTether },
    { symbol: "USDC", Icon: DollarSign },
    { symbol: "XMR", Icon: SiMonero },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md flex flex-col space-y-6">
        {/* Header with calculator icon */}
        <div className="flex items-center space-x-2">
          <Calculator className="w-6 h-6 text-gray-900 dark:text-white" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Calculate Your Loan</h2>
        </div>
        {/* Collateral input */}
        <AmountInput
          label="Collateral"
          token={inputToken}
          value={inputAmount}
          onChange={setInputAmount}
          onTokenClick={() => setInputOpen(prev => !prev)}
        />
        {/* Collateral dropdown */}
        {inputOpen && (
          <ul className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-2 max-h-40 overflow-auto">
            {tokens.map(token => (
              <li key={token.symbol}>
                <button
                  onClick={() => { setInputToken(token); setInputOpen(false); }}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <token.Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  <span className="text-gray-900 dark:text-white">{token.symbol}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
        {/* Loan amount input */}
        <AmountInput
          label="You Receive"
          token={outputToken}
          value={outputAmount}
          onChange={setOutputAmount}
          onTokenClick={() => setOutputOpen(prev => !prev)}
        />
        {/* Loan dropdown */}
        {outputOpen && (
          <ul className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-2 max-h-40 overflow-auto">
            {tokens.map(token => (
              <li key={token.symbol}>
                <button
                  onClick={() => { setOutputToken(token); setOutputOpen(false); }}
                  className="flex items-center space-x-2 w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                >
                  <token.Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                  <span className="text-gray-900 dark:text-white">{token.symbol}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
