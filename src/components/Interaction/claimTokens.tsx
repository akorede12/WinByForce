import {ethers} from 'ethers';
import contractAbi from '../../../contracts/MillionaireGame.json';

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');

async function claimTokens() {
    try {
        const signer = await provider.getSigner();
        // signer contract
        const sContract = new ethers.Contract(contractAddress, contractAbi, signer);
        await sContract.claimTokens();
        console.log('Tokens claimed successfully');
    } catch (error) {
        console.error('Error claiming tokens:', error);
        throw error;
    }
}

export default claimTokens;

