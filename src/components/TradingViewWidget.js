import React, { useEffect, useRef } from "react";

const TradingViewWidget = ({ isOpen, onClose }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12M",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: false,
      width: "100%",
      height: "100%",
      tabs: [
        {
          title: "Stocks",
          symbols: [
            { s: "NASDAQ:ABNB", d: "Airbnb" },
            { s: "NASDAQ:AMD", d: "AMD" },
            { s: "NYSE:AMC", d: "AMC" },
            { s: "NYSE:BAC", d: "Bank of America" },
            { s: "NYSE:BA", d: "Boeing" },
            { s: "NYSE:BLK", d: "BlackRock" },
            { s: "NASDAQ:COIN", d: "Coinbase" },
            { s: "NASDAQ:COST", d: "Costco" },
            { s: "NYSE:DIS", d: "Disney" },
            { s: "NYSE:GME", d: "GameStop" },
            { s: "NASDAQ:HOOD", d: "Robinhood" },
            { s: "NASDAQ:INTC", d: "Intel" },
            { s: "NYSE:JNJ", d: "J&J" },
            { s: "NYSE:JPM", d: "JPMorgan" },
            { s: "NYSE:KR", d: "Kroger" },
            { s: "NASDAQ:MRNA", d: "Moderna" },
            { s: "NYSE:NKE", d: "Nike" },
            { s: "NASDAQ:NVDA", d: "Nvidia" },
            { s: "NASDAQ:TSLA", d: "Tesla" },
            { s: "NASDAQ:NFLX", d: "Netflix" },
          ],
          originalTitle: "Stocks",
        },
        {
          title: "Tech",
          symbols: [
            { s: "NASDAQ:AAPL", d: "Apple" },
            { s: "NASDAQ:AMZN", d: "Amazon" },
            { s: "NASDAQ:GOOGL", d: "Google" },
            { s: "NASDAQ:META", d: "Meta" },
            { s: "NASDAQ:MSFT", d: "Microsoft" },
            { s: "NASDAQ:SNAP", d: "Snap" },
            { s: "NYSE:DT", d: "Dynatrace" },
            { s: "NASDAQ:EA", d: "EA" },
            { s: "NASDAQ:Z", d: "Zillow" },
          ],
          originalTitle: "Tech",
        },
        {
          title: "ETFs & Market",
          symbols: [
            { s: "AMEX:SPY", d: "SPY" },
            { s: "AMEX:VOO", d: "VOO" },
            { s: "AMEX:VTI", d: "VTI" },
            { s: "CBOE:VIX", d: "VIX" },
          ],
          originalTitle: "ETFs & Market",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BITSTAMP:BTCUSD", d: "Bitcoin" },
            { s: "BITSTAMP:ETHUSD", d: "Ethereum" },
            { s: "BINANCE:DOGEUSDT", d: "Dogecoin" },
          ],
          originalTitle: "Crypto",
        },
        {
          title: "Forex & Commodities",
          symbols: [
            { s: "TVC:DXY", d: "DXY" },
            { s: "FX:EURUSD", d: "EUR/USD" },
            { s: "FX:GBPUSD", d: "GBP/USD" },
            { s: "FX:USDJPY", d: "USD/JPY" },
            { s: "TVC:GOLD", d: "Gold" },
            { s: "TVC:SILVER", d: "Silver" },
            { s: "TVC:USOIL", d: "Crude Oil" },
          ],
          originalTitle: "Forex & Commodities",
        },
        {
          title: "Food & Dividends",
          symbols: [
            { s: "NYSE:MCD", d: "McDonald's" },
            { s: "NYSE:CMG", d: "Chipotle" },
            { s: "NASDAQ:SBUX", d: "Starbucks" },
            { s: "NYSE:DPZ", d: "Domino's" },
            { s: "NYSE:GIS", d: "General Mills" },
            { s: "NYSE:HSY", d: "Hershey" },
            { s: "NYSE:MO", d: "Altria" },
            { s: "NYSE:O", d: "Realty Income" },
            { s: "NYSE:PFE", d: "Pfizer" },
            { s: "NYSE:IBM", d: "IBM" },
          ],
          originalTitle: "Food & Dividends",
        },
      ],
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 rounded-lg shadow-lg w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <h2 className="text-white text-xl font-bold">My Watchlist</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ✕
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <div
            className="tradingview-widget-container"
            ref={containerRef}
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TradingViewWidget;
