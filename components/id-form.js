"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useTheme } from "next-themes"; // For light/dark mode support

export function IDForm({ onSubmit }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [photoPreview, setPhotoPreview] = useState("");
  const [idNo, setIdNo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme(); // Get current theme

  // Function to generate a unique ID
  const generateUniqueId = () => Math.random().toString(36).substring(2, 12).toUpperCase();

  // Generate ID Number when button is clicked
  const handleGenerateId = () => {
    const newId = generateUniqueId();
    setIdNo(newId);
    setValue("idNo", newId); // Update form state
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setPhotoPreview(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const processSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = { ...data, idNo, photoUrl: photoPreview };

      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to save user data");

      const savedData = await response.json();
      onSubmit(savedData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full p-4 bg-white dark:bg-gray-900 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg dark:text-white">Enter Your Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="id-form" onSubmit={handleSubmit(processSubmit)} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="dark:text-white">Full Name</Label>
            <Input 
              id="name" 
              placeholder="Enter your name" 
              className="dark:bg-gray-800 dark:text-white"
              {...register("name", { required: "Name is required" })} 
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Registration Number */}
          <div className="space-y-2">
            <Label htmlFor="regNo" className="dark:text-white">Registration Number</Label>
            <Input 
              id="regNo" 
              placeholder="Enter Registration No" 
              className="dark:bg-gray-800 dark:text-white"
              {...register("regNo", { required: "Registration Number is required" })} 
            />
            {errors.regNo && <p className="text-red-500 text-sm">{errors.regNo.message}</p>}
          </div>

          {/* ID Number (Auto-Generated) */}
          <div className="space-y-2">
            <Label htmlFor="idNo" className="dark:text-white">ID Number</Label>
            <div className="flex space-x-2">
              <Input 
                id="idNo" 
                value={idNo} 
                readOnly 
                className="dark:bg-gray-800 dark:text-white flex-1"
                {...register("idNo", { required: "ID Number is required" })} 
              />
              <Button type="button" onClick={handleGenerateId} className="dark:bg-gray-700 dark:text-white">
                Generate ID
              </Button>
            </div>
          </div>

          {/* Upload Photo */}
          <div className="space-y-2">
            <Label htmlFor="photo" className="dark:text-white">Upload Photo</Label>
            <Input 
              id="photo" 
              type="file" 
              accept="image/*" 
              className="dark:bg-gray-800 dark:text-white"
              onChange={handlePhotoChange} 
            />
            {photoPreview && <img src={photoPreview} alt="Preview" className="h-32 w-32 object-cover rounded-md border mt-2" />}
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="id-form" className="w-full dark:bg-gray-700 dark:text-white" disabled={isLoading || !photoPreview}>
          {isLoading ? "Processing..." : "Generate ID Card"}
        </Button>
      </CardFooter>
    </Card>
  );
}
