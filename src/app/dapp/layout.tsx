import { TopNav } from "./_components/top-nav";
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Web3Modal } from "./_ethereum/web3modal";

export const metadata = {
  title: "BlockchainRaffle",
  description: "Raffles that are on the blockchain",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} dark`}>
      <body>
        <Web3Modal>
          <TopNav />
          <main className="flex flex-col justify-evenly">{children}</main>
        </Web3Modal>
      </body>
    </html>
  );
}
