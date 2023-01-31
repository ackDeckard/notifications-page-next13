"use client";
import React from "react";

function PrivateMessage({ message }) {
  return (
    <div className="mt-2 ml-2 rounded-md border bg-inherit px-3 py-2 text-sm text-darkgrayishblue hover:cursor-pointer hover:bg-verylightgrayishblue">
      {message}
    </div>
  );
}

export default PrivateMessage;
