"use client"
import React from "react";

const MainLayout = ({ children }: {children:React.JSX.Element | any}) => {

  return (
    <main className="p-5 min-h-screen bg-slate-300 flex justify-center items-center">
      {children}
    </main>
  );
};

export default MainLayout;
