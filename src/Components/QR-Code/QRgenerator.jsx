import { useState } from "react";
import "./QRgenerator.css";
const QRgenerator = () => {
  const [img, setImg] = useState("");
  const [isLoading, setLoad] = useState(false);
  const [qrData, setQrData] = useState("");
  //   https://google.com
  const [qrSize, setQrSize] = useState("");
  //   150

  async function generateQR() {
    setLoad(true);
    // setImg(
    //   "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // );
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?sixe=${qrSize}x${qrSize}&data=${encodeURIComponent(
        qrData
      )}`;
      setImg(url);
    } catch (err) {
      console.log("Error while generating QR code", err);
    } finally {
      setLoad(false);
    }
  }

  function downloadQR() {
    fetch(img)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.log("Error while downloading QR", error));
  }

  return (
    <div className="app-container">
      <h1>Generate a QR code</h1>
      {isLoading && <p>Please wait...</p>}
      {img && (
        <img src={img} className="qr-image" width={qrSize} height={qrSize} />
      )}

      {/* {img && <img src={img} className="qr-image" />} */}

      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          type="text"
          id="dataInput"
          placeholder="Enter data for QR code"
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />

        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150):
        </label>
        <input
          type="text"
          id="sizeInput"
          placeholder="Enter image size"
          value={qrSize}
          onChange={(e) => setQrSize(e.target.value)}
        />
        <button className="generate" disabled={isLoading} onClick={generateQR}>
          Generate QR code
        </button>
        <button className="download" onClick={downloadQR}>
          Download QR code
        </button>
      </div>
      <p className="footer">
        Designed to <a href="https://en.wikipedia.org/wiki/Learning">learn</a>
      </p>
    </div>
  );
};

export default QRgenerator;
