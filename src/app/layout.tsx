import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/header/Navbar";


// // rainbowkit
// import '@rainbow-me/rainbowkit/styles.css';

// import {
//   getDefaultConfig,
//   RainbowKitProvider,
//   getDefaultWallets
// } from '@rainbow-me/rainbowkit';
// import {
//   argentWallet,
//   trustWallet,
//   ledgerWallet,
// } from '@rainbow-me/rainbowkit/wallets';
// import { WagmiProvider } from 'wagmi';
// import {
//   mainnet,
//   polygon,
//   optimism,
//   arbitrum,
//   base
// } from 'wagmi/chains';
// import {
//   QueryClientProvider,
//   QueryClient,
// } from "@tanstack/react-query";

// const config = getDefaultConfig({
//   appName: 'My RainbowKit App',
//   projectId: 'YOUR_PROJECT_ID',
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

// const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlocQuest",
  description: "Learn and Earn Gamefi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <WagmiProvider config={config}>
    // <QueryClientProvider client={queryClient}>
    //   <RainbowKitProvider>
    <html lang="en">
      <body className={inter.className}>
        <main className="relative flex flex-col min-h-screen w-screen">
          <NavigationBar/>
        <div>  {children}</div>
        </main>
      </body>
    </html>
    /* </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider> */
  );
};
//   );
// }
