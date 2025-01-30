"use client";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQrValue(text);
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
            <QRCodeCanvas value={qrValue} size={200} level="H" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
