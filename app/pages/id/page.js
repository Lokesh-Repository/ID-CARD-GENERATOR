"use client";

import { useState } from "react";
import { IDForm } from "../../../components/id-form";
import { IDCard } from "../../../components/id-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import { useTheme } from "next-themes";

export default function Home() {
  const [formData, setFormData] = useState(null);
  const { theme } = useTheme(); // Detects light/dark mode

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  const handleDownload = async () => {
    const cardElement = document.getElementById("id-card");
    if (!cardElement) return;

    try {
      const canvas = await html2canvas(cardElement, {
        scale: 2,
        backgroundColor: theme === "dark" ? "#0f172a" : "#ffffff", // Dark mode adaptation
      });
      canvas.toBlob((blob) => blob && saveAs(blob, "id-card.jpg"), "image/jpeg", 0.95);
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-background p-6 transition-colors duration-300 mt-20">
      <Card className="w-full max-w-3xl shadow-lg border rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">
            ID Card Generator
          </CardTitle>
        </CardHeader>

        <CardContent>
          {formData ? (
            <div className="flex flex-col items-center gap-6">
              <IDCard userData={formData} />

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setFormData(null)}>
                  Back to Form
                </Button>
                <Button onClick={handleDownload}>Download ID</Button>
              </div>
            </div>
          ) : (
            <IDForm onSubmit={handleFormSubmit} />
          )}
        </CardContent>
      </Card>
    </main>
  );
}
