"use client";
import { memo } from "react";
import Container from "@/app/components/Container";

function Footer() {
  return (
    <footer
      className="bg-white border-t border-gray-100 mt-20"
      role="contentinfo"
    >
      <Container>
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Notivo. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with ❤️ for better notifications
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default memo(Footer);
