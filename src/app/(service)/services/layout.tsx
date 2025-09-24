import ServiceNavbar from "@/component/layout/ServiceNavbar";

export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ServiceNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
