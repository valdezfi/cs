"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, DollarSign, Calculator } from "lucide-react";
import { SiBitcoin, SiEthereum, SiTether, SiMonero } from "react-icons/si";
import Head from "next/head";

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
      <Head>
        <title>Crypto Calculator – Convert BTC, ETH, XMR to Fiat Instantly</title>
        <meta
          name="description"
          content="Convert BTC, ETH, USDT, and XMR to USD, EUR, MXN, and more. Accurate crypto-to-fiat rates using the Crypto Calculator."
        />
        <meta property="og:title" content="Crypto Calculator" />
        <meta
          property="og:description"
          content="Convert your favorite cryptocurrencies to fiat instantly using our fast and accurate crypto calculator."
        />
        <meta property="og:image" content="https://numerobook.com/public/OIG-19.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://numerobook.com/cryptocalculator" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crypto Calculator" />
        <meta
          name="twitter:description"
          content="Real-time BTC, ETH, XMR, and USDT to fiat converter. Accurate and easy-to-use crypto calculator."
        />
        <meta name="twitter:image" content="https://numerobook.com/public/OIG-19.jpg" />
      </Head>

      <main className="min-h-screen flex items-center justify-center py-12" role="main">
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-md flex flex-col space-y-6" aria-labelledby="crypto-converter-title">
          <header className="text-center">
            <h1 id="crypto-converter-title" className="text-2xl font-bold text-gray-900 dark:text-white">
              Crypto Calculator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Crypto Calculator is your go-to tool for real-time crypto-to-fiat conversions. Whether you're calculating profits or checking the latest exchange rates, this Crypto Calculator makes it easy to convert your favorite cryptocurrencies. Use the built-in bitcoin calculator or explore options like XMR to USD with our smart XMR calculator feature. Fast, accurate, and user-friendly, the Crypto Calculator simplifies your crypto journey—no matter your experience level.
            </p>
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