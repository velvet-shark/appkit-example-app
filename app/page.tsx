import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h3 className="fixed left-0 top-0 flex w-full justify-center pb-6 pt-8 lg:static lg:w-auto lg:p-4 font-bold text-xl">
          WalletConnect AppKit example app
        </h3>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <w3m-button />
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="grid gap-2">
          Account button:
          <br />
          <w3m-account-button />
        </div>
        <div className="grid gap-2">
          Connect button:
          <br />
          <w3m-connect-button />
        </div>
        <div className="grid gap-2">
          Network button:
          <br />
          <w3m-network-button />
        </div>
        <div className="grid gap-2">
          Custom button:
          <br />
          <CustomButton />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a href="https://docs.walletconnect.com" target="_blank" rel="noreferrer">
          WalletConnect Docs
        </a>
      </div>
    </main>
  );
}
