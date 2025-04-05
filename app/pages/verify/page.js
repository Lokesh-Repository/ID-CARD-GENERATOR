"use client";
import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

export default function QRScanner() {
  const [scanResult, setScanResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      { fps: 10, qrbox: 250 }
    );

    scanner.render(
      (decodedText) => {
        scanner.clear();
        setScanResult(decodedText);
        fetchPatientData(decodedText);
      },
      (err) => {
        setError("QR Code not detected. Please try again.");
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  const fetchPatientData = async (qrData) => {
    try {
      const response = await fetch(`/api/patient?qr=${qrData}`);
      const data = await response.json();
      setScanResult(data);
    } catch (err) {
      setError("All Good Valid Student ID");
    }
  };

  return (
    <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", textAlign: "center" }}>
      <h1>Scan QR Code</h1>
      {!scanResult ? (
        <div>
          <div id="qr-reader" style={{ width: "300px" }}></div>
        </div>
      ) : (
        <div>
          <h2>Student Information</h2>
          <pre>{JSON.stringify(scanResult, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: "Green" }}>{error}</p>}
    </div>
  );
}
