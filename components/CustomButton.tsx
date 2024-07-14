"use client";

import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";

export default function CustomButton() {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <button onClick={() => disconnect()} style={{ color: "yellow", fontWeight: "bold", textAlign: "left" }}>
        Disconnect
      </button>
    );
  return (
    <button onClick={() => open()} style={{ color: "lime", fontWeight: "bold", textAlign: "left" }}>
      open modal
    </button>
  );
}
