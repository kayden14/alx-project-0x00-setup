// pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const LandingPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Villa App</h1>
      <Card />
      <Card />
      <Card />

      <div className="mt-10 space-y-4">
        <Button title="Small Button" size="small" shape="rounded-sm" styles={"rounded-lg"} />
        <Button title="Medium Button" size="medium" shape="rounded-md" styles={"rounded-lg"} />
        <Button title="Large Button" size="large" shape="rounded-full" styles={"rounded-lg"} />

      </div>
    </div>
  );
};

export default LandingPage;
