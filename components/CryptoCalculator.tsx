"use client";

import React, { useState, useEffect } from "react";
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
    <div className="flex flex-col" aria-label={`${label} input`}>
      <label className="text-sm text-gray-600 dark:text-gray-400 mb-1">{label}</label>
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3">
        <input
          type="text"
          inputMode="decimal"
          pattern="[0-9]*[.,]?[0-9]*"
          placeholder="0.0"
          aria-label={`${label} amount`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent placeholder-gray-400 dark:placeholder-gray-600 text-2xl font-medium text-gray-900 dark:text-white focus:outline-none"
        />
        <button
          onClick={onTokenClick}
          className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-3 py-1 rounded-lg shadow"
          aria-label={`Select ${label} token`}
        >
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
  const [outputToken, setOutputToken] = useState<Token>({ symbol: "USD", Icon: DollarSign });
  const [inputOpen, setInputOpen] = useState(false);
  const [outputOpen, setOutputOpen] = useState(false);
  const [rates, setRates] = useState<any>(null);
  const [lastChanged, setLastChanged] = useState<"crypto" | "fiat">("crypto");

  const tokens: Token[] = [
    { symbol: "ETH", Icon: SiEthereum },
    { symbol: "BTC", Icon: SiBitcoin },
    { symbol: "USDT", Icon: SiTether },
    { symbol: "USDC", Icon: DollarSign },
    { symbol: "XMR", Icon: SiMonero },
  ];

  const fiats: Token[] = [
    { symbol: "USD", Icon: DollarSign },
    { symbol: "EUR", Icon: DollarSign },
    { symbol: "MXN", Icon: DollarSign },
    { symbol: "AED", Icon: DollarSign },
    { symbol: "INR", Icon: DollarSign },
    { symbol: "CLP", Icon: DollarSign },
    { symbol: "NGN", Icon: DollarSign },
  ];

  useEffect(() => {
    fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,USDC,XMR,USDT&tsyms=USD,EUR,MXN,AED,INR,CLP,NGN")
      .then(res => res.json())
      .then(data => setRates(data.RAW));
  }, []);

  useEffect(() => {
    if (!rates || !inputToken || !outputToken) return;

    const from = inputToken.symbol;
    const to = outputToken.symbol;
    const price = rates[from]?.[to]?.PRICE;

    if (!price) {
      setOutputAmount("0.00");
      return;
    }

    if (lastChanged === "crypto" && inputAmount) {
      const converted = Number(inputAmount) * Number(price);
      setOutputAmount(converted.toFixed(2));
    } else if (lastChanged === "fiat" && outputAmount) {
      const converted = parseFloat(outputAmount) / price;
      setInputAmount(converted.toFixed(6));
    }
  }, [inputAmount, outputAmount, inputToken, outputToken, rates, lastChanged]);

  return (
    <>
    

      <main className="min-h-screen flex items-center justify-center py-12" role="main">
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md flex flex-col space-y-6" aria-labelledby="crypto-converter-title">
          <header className="text-center">
            <h1 id="crypto-converter-title" className="text-2xl font-bold text-gray-900 dark:text-white">
              Crypto Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
            Looking to understand your crypto conversions better? Our crypto calculator supports a range of tools including a monero calculator for quick monero to USD estimates and an XMR chart calculator to track trends over time. If you're dealing with Bitcoin, try our real-time bitcoin calculator and bitcoin converter to stay on top of market rates. For stablecoin users, we offer a tether calculator, support for USD to USDT conversions, and details on tether fees so you know exactly what to expect during each transaction.            </p>
          </header>

          <div className="flex items-center space-x-2" aria-hidden="true">
            <Calculator className="w-6 h-6 text-gray-900 dark:text-white" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Convert and Swap Crypto to Fiat Instantly.
            </h2>
          </div>

          <AmountInput
            label="Crypto"
            token={inputToken}
            value={inputAmount}
            onChange={(v) => {
              setInputAmount(v);
              setLastChanged("crypto");
            }}
            onTokenClick={() => setInputOpen((prev) => !prev)}
          />

          {inputOpen && (
            <ul className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-2 max-h-40 overflow-auto" aria-label="Select a crypto token">
              {tokens.map((token) => (
                <li key={token.symbol}>
                  <button
                    onClick={() => {
                      setInputToken(token);
                      setInputOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <token.Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                    <span className="text-gray-900 dark:text-white">{token.symbol}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}

          <AmountInput
            label="Local Currency"
            token={outputToken}
            value={outputAmount}
            onChange={(v) => {
              setOutputAmount(v);
              setLastChanged("fiat");
            }}
            onTokenClick={() => setOutputOpen((prev) => !prev)}
          />

          {outputOpen && (
            <ul className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-2 max-h-40 overflow-auto" aria-label="Select a fiat currency">
              {fiats.map((token) => (
                <li key={token.symbol}>
                  <button
                    onClick={() => {
                      setOutputToken(token);
                      setOutputOpen(false);
                    }}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                  >
                    <token.Icon className="w-6 h-6 text-gray-900 dark:text-white" />
                    <span className="text-gray-900 dark:text-white">{token.symbol}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}