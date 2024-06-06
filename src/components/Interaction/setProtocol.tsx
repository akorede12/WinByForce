import {ethers} from 'ethers';
import contractAbi from '../../contracts/MillionaireGame.json';

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');

// setPreferredProtocol(Protocol protocol)
async function setProtocol(protocol: string) {
    try {
        const signer = await provider.getSigner();
        // signer contract
        const sContract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
        const tx = await sContract.setPreferredProtocol(protocol);
        await tx.wait();
    } catch(error) {
        console.error
    }
}

export default setProtocol;