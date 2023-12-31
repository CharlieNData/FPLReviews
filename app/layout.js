import './globals.css';
import React from 'react';
import {Inter} from 'next/font/google';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'FPL Player Reviews',
  description: 'A Fantasy Premier League app by Charlie Jewers',
};


/**
 * Root function.
 * @return {React.ReactElement} Web app.
 */
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
