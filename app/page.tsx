import QRCodeGenerator from "./components/QRCodeGenerator";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <QRCodeGenerator />
    </div>
  );
}
