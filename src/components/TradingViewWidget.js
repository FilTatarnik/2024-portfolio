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
            { s: "NASDAQ:ABNB" },
            { s: "NASDAQ:ADI" },
            { s: "NYSE:AMC" },
            { s: "NASDAQ:AMD" },
            { s: "NYSE:AON" },
            { s: "NASDAQ:ATVI" },
            { s: "NYSE:BA" },
            { s: "NYSE:BABA" },
            { s: "NYSE:BAC" },
            { s: "NYSE:BB" },
            { s: "NASDAQ:BBBY" },
            { s: "NASDAQ:BGFV" },
            { s: "NYSE:BLK" },
            { s: "NASDAQ:CACC" },
            { s: "NYSE:CAT" },
            { s: "NYSE:CLF" },
            { s: "NASDAQ:CLNE" },
            { s: "NYSE:CLOV" },
            { s: "NASDAQ:COIN" },
            { s: "NYSE:COKE" },
            { s: "NASDAQ:COST" },
            { s: "NASDAQ:CVM" },
            { s: "NYSE:DD" },
            { s: "NYSE:DE" },
            { s: "NYSE:DIS" },
            { s: "NYSE:DM" },
            { s: "NASDAQ:DNUT" },
            { s: "NYSE:DT" },
            { s: "NASDAQ:EA" },
            { s: "NYSE:EDR" },
            { s: "NASDAQ:GERN" },
            { s: "NYSE:GME" },
            { s: "NASDAQ:HOOD" },
            { s: "NASDAQ:INTC" },
            { s: "NYSE:JNJ" },
            { s: "NYSE:JPM" },
            { s: "NYSE:KMI" },
            { s: "NYSE:KR" },
            { s: "NYSE:LMND" },
            { s: "NYSE:LOVE" },
            { s: "NASDAQ:LUMN" },
            { s: "NYSE:LYV" },
            { s: "NASDAQ:MAC" },
            { s: "NASDAQ:MRNA" },
            { s: "NYSE:NKE" },
            { s: "NASDAQ:NKLA" },
            { s: "NYSE:NOK" },
            { s: "NASDAQ:NVDA" },
            { s: "NASDAQ:OMEX" },
            { s: "NYSE:PTLO" },
            { s: "NYSE:PTON" },
            { s: "NYSE:RBLX" },
            { s: "NYSE:RELI" },
            { s: "NYSE:RKT" },
            { s: "NASDAQ:SIRI" },
            { s: "NYSE:SNAP" },
            { s: "NASDAQ:SNDL" },
            { s: "NASDAQ:SOFI" },
            { s: "NYSE:SPCE" },
            { s: "NYSE:TAL" },
            { s: "NASDAQ:TSLA" },
            { s: "NYSE:UL" },
            { s: "NYSE:UWMC" },
            { s: "NYSE:WKHS" },
            { s: "NASDAQ:WOOF" },
            { s: "NASDAQ:YRD" },
            { s: "NASDAQ:Z" },
          ],
          originalTitle: "Stocks",
        },
        {
          title: "Food Stocks",
          symbols: [
            { s: "NYSE:GIS" },
            { s: "NYSE:HSY" },
            { s: "NYSE:K" },
            { s: "NASDAQ:MKC" },
            { s: "NYSE:SJM" },
            { s: "NYSE:TR" },
          ],
          originalTitle: "Food Stocks",
        },
        {
          title: "High Dividends",
          symbols: [
            { s: "NYSE:ENB" },
            { s: "NYSE:EPD" },
            { s: "NYSE:IBM" },
            { s: "NYSE:MO" },
            { s: "NYSE:NHI" },
            { s: "NYSE:O" },
            { s: "NYSE:PFE" },
            { s: "NYSE:PM" },
          ],
          originalTitle: "High Dividends",
        },
        {
          title: "Fast Food",
          symbols: [
            { s: "NYSE:CMG" },
            { s: "NYSE:MCD" },
            { s: "NYSE:QSR" },
            { s: "NASDAQ:SBUX" },
            { s: "NYSE:WEN" },
          ],
          originalTitle: "Fast Food",
        },
        {
          title: "US Market",
          symbols: [
            { s: "FOREXCOM:SPXUSD" },
            { s: "FOREXCOM:NSXUSD" },
            { s: "FOREXCOM:DJI" },
            { s: "AMEX:SPY" },
            { s: "CBOE:VIX" },
            { s: "AMEX:VOO" },
            { s: "AMEX:VTI" },
          ],
          originalTitle: "US Market",
        },
        {
          title: "Tech",
          symbols: [
            { s: "NASDAQ:AAPL" },
            { s: "NASDAQ:AMZN" },
            { s: "NASDAQ:GOOGL" },
            { s: "NASDAQ:META" },
            { s: "NASDAQ:MSFT" },
            { s: "NASDAQ:NFLX" },
          ],
          originalTitle: "Tech",
        },
        {
          title: "Futures",
          symbols: [
            { s: "CBOT:CORNF" },
            { s: "TVC:GOLD" },
            { s: "TVC:SILVER" },
            { s: "CBOT:SOYF" },
            { s: "TVC:USOIL" },
            { s: "CBOT:WHEATF" },
          ],
          originalTitle: "Futures",
        },
        {
          title: "Forex",
          symbols: [
            { s: "TVC:DXY" },
            { s: "FX:EURUSD" },
            { s: "FX:GBPUSD" },
            { s: "FX:USDJPY" },
          ],
          originalTitle: "Forex",
        },
        {
          title: "Crypto",
          symbols: [
            { s: "BITSTAMP:BTCUSD" },
            { s: "BINANCE:DOGEUSDT" },
            { s: "BITSTAMP:ETHUSD" },
            { s: "BINANCE:LUNAUSDT" },
          ],
          originalTitle: "Crypto",
        },
        {
          title: "Fed",
          symbols: [
            { s: "FRED:CCSA" },
            { s: "FRED:CP" },
            { s: "FRED:CPIAUCSL" },
            { s: "FRED:DGORDER" },
            { s: "FRED:DGS10" },
            { s: "FRED:DGS2" },
            { s: "FRED:DGS30" },
            { s: "FRED:DGS5" },
            { s: "FRED:DPRIME" },
            { s: "FRED:ECOMSA" },
            { s: "FRED:FEDFUNDS" },
            { s: "FRED:FYFSD" },
            { s: "FRED:FYFSGDA1" },
            { s: "FRED:GDP" },
            { s: "FRED:GFDEBTN" },
            { s: "FRED:GFDEGDQ" },
            { s: "FRED:HOUST" },
            { s: "FRED:PAYEMS" },
            { s: "FRED:PERMIT" },
            { s: "FRED:PI" },
            { s: "FRED:POP" },
            { s: "FRED:PSAVERT" },
            { s: "FRED:TDSP" },
            { s: "FRED:TOTALSL" },
            { s: "FRED:UNRATE" },
            { s: "FRED:USGOVT" },
            { s: "FRED:WM1NS" },
            { s: "FRED:WM2NS" },
          ],
          originalTitle: "Fed",
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
