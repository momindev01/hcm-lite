import { AuthProvider } from "@/context/AuthContext";
import InitializeDemoAdmin from "@/components/InitializeDemoAdmin";
import "./globals.css";

export const metadata = {
  title: "HCM Lite",
  description: "Human Capital Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <InitializeDemoAdmin />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
