import {ethers} from 'ethers';
import contractAbi from '../../contracts/MillionaireGame.json';

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');


async function getQuestion() {
    try {
        const pContract = new ethers.Contract(contractAddress, contractAbi.abi, provider);
        const result = await pContract.getQuestion();
        return { question: result[0], choices: result[1] };
    } catch (error) {
        console.error('Error getting question:', error);
        throw error;
    }
}

export default getQuestion;