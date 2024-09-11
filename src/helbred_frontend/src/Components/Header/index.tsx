import React, { useState, useEffect } from "react";
import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { base, sepolia } from "thirdweb/chains";

const Header = () => {
  const [shadow, setShadow] = useState(false);
  const [connected, setConnected] = useState(false);
  const [payeeAddress, setPayeeAddress] = useState("");



  const handleConnect = () => {
    setConnected(true);
  };




  return (
    <header
      className={`bg-teal-500 text-white w-full fixed top-0 left-0 z-50 transition-shadow mt-0 mb-0 ${
        shadow ? "shadow-lg" : ""
      }`}
    >
      <nav className="container flex items-center justify-between mx-auto w-full md:w-auto ">
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-8">
            <img
              src="images/icon.png"
              alt="Icon"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full object-cover"
            />
            <span className="text-2xl font-bold">HelBred</span>
          </a>
          <a href="/dash" className="flex items-center space-x-2 border border border-teal-100 p-2 hover:border-teal-900 ">
            <span className="text-xl font-bold">Doctor Panel</span>
          </a>
          <a href="/user" className="flex items-center space-x-2 border border border-teal-100 p-2 hover:border-teal-900 ">
            <span className="text-xl font-bold">Patient Panel</span>
          </a>
        </div>
        <div>
   <div >
          {!connected ? (
            <ConnectButton
              client={createThirdwebClient({
                clientId: "b9fadb0987db2e9cda89444d5f5315ac",
              })}
              wallets={[
                createWallet("com.coinbase.wallet", {
                  walletConfig: {
                    options: "smartWalletOnly",
                  },
                  chains: [base, sepolia],
                }),
              ]}
              onConnect={handleConnect}
             
            />
          ) : (
            <p>Wallet Connected!</p>
          )}
        </div>
         
        </div>
      </nav>
    </header>
  );
};

export default Header;
