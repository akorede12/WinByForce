import {ethers} from 'ethers';
import contractAbi from '../../contracts/MillionaireGame.json';

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');


async function answerQuestion(choice: string) {
    try {
        const signer = await provider.getSigner();
        // signer contract
        const sContract = new ethers.Contract(contractAddress, contractAbi.abi, signer);
        await sContract.answerQuestion(choice);
        console.log('Answer submitted successfully');
    } catch (error) {
        console.error('Error answering question:', error);
        throw error;
    }
}

export default answerQuestion;