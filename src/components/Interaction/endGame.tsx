import {ethers} from 'ethers';
import contractAbi from '../../contracts/MillionaireGame.json';

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');


async function endGame() {
    try {
        // Call the endGame function on the contract
        const pContract = new ethers.Contract(contractAddress, contractAbi.abi, provider);
        await pContract.endGame();
        console.log('Game ended successfully');
    } catch (error) {
        console.error('Error ending game:', error);
        throw error;
    }
}

export default endGame;
