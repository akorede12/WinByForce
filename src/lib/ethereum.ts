// lib/ethereum.ts
import { Web3Provider } from '@ethersproject/providers';

interface NetworkConfig {
    chainId: string;
    chainName: string;
    rpcUrls: string[];
    blockExplorerUrls: string[];
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
}

const networks: Record<string, NetworkConfig> = {
    Amoy: {
        chainId: `0x${(80002).toString(16)}`, // Hexadecimal chainId
        chainName: 'Amoy',
        rpcUrls: ['https://rpc-amoy.polygon.technology'],
        blockExplorerUrls: ['https://www.oklink.com/amoy'],
        nativeCurrency: {
            name: "MATIC",
            symbol: "MATIC",
            decimals: 18
        }
    },
    // You can add more networks here
};

export const getProvider = async (networkKey: keyof typeof networks = 'Amoy'): Promise<Web3Provider> => {
    if (window.ethereum) {
        const provider = new Web3Provider(window.ethereum);
        try {
            const network = networks[networkKey];
            await provider.send("wallet_addEthereumChain", [network]);
            await provider.send("eth_requestAccounts", []);
            return provider;
        } catch (error) {
            console.error("Error switching network or requesting account access:", error);
            throw new Error("Failed to switch network or connect to Ethereum network");
        }
    } else {
        console.error("MetaMask is not installed");
        throw new Error("MetaMask is not installed");
    }
};
