"use client";

import { Card } from "@/components/ui/card";
import { QRCodeCanvas } from "qrcode.react";

export function IDCard({ userData }) {
  const currentDate = new Date();
  const expiryDate = new Date();
  expiryDate.setFullYear(currentDate.getFullYear() + 5);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });

  return (
    <div id="id-card" className="w-full max-w-md">
      <Card className="overflow-hidden border border-gray-300 dark:border-gray-700 shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="bg-primary p-4 text-center text-primary-foreground">
          <h2 className="text-xl font-bold tracking-wide">OFFICIAL ID CARD</h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row p-6 gap-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          {/* User Photo */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="h-40 w-32 overflow-hidden rounded-md border-2 border-primary shadow-md">
              {userData.photoUrl && (
                <img
                  src={userData.photoUrl}
                  alt="User Photo"
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>

          {/* User Details */}
          <div className="flex-grow space-y-4">
            <div>
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">Full Name</h3>
              <p className="text-lg font-semibold">{userData.name}</p>
            </div>

            <div>
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">ID Number</h3>
              <p className="text-lg font-mono font-bold text-primary">{userData.idNo}</p>
            </div>

            <div>
              <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400">
                Registration Number
              </h3>
              <p className="text-lg font-mono">{userData.regNo}</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center my-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-md shadow-inner">
          <QRCodeCanvas value={userData.idNo} size={120} />
        </div>

        {/* Footer Section */}
        <div className="bg-muted p-4 flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <div>
            <span className="font-medium text-gray-500 dark:text-gray-400">Issue Date:</span>{" "}
            {formatDate(currentDate)}
          </div>
          <div>
            <span className="font-medium text-gray-500 dark:text-gray-400">Valid Until:</span>{" "}
            {formatDate(expiryDate)}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-primary/10 p-3 text-center text-xs text-gray-600 dark:text-gray-400">
          <p>This ID card is the property of the organization. If found, please return it.</p>
        </div>
      </Card>
    </div>
  );
}
