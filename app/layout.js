import './globals.css';

export const metadata = {
  title: 'TransitCore Freight & Logistics',
  description: 'Freight forwarding and logistics solutions across Zambia, Southern and Eastern Africa.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
