"use client";
import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const qrCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQrValue(text);
  };

  const handleDownload = () => {
    if (qrCanvasRef.current) {
      const canvas = qrCanvasRef.current;
      const imageUrl = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "qr-code.png";
      link.click();
    }
  };

  return (
    <Card className="w-80 mx-auto mt-10 p-4">
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <Input
            type="text"
            placeholder="Enter text for QR Code"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full"
          />
          <Button type="submit">Generate QR Code</Button>
        </form>
        {qrValue && (
          <div className="mt-4 flex flex-col items-center">
            <QRCodeCanvas
              value={qrValue}
              size={200}
              level="H"
              ref={qrCanvasRef}
            />
            <Button className="mt-4" onClick={handleDownload}>
              Download QR Code
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
