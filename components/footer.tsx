import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Trilok Bhattacharya. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built on top of ByteGrad's 
        portfolio template.{" "} <span className="underline"><a href="https://github.com/ByteGrad/portfolio-website">
          View source code
        </a></span>
      </p>
    </footer>
  );
}
