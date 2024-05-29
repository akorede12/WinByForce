import {ethers} from 'ethers';
import contractAbi from '../../contracts/MillionaireGame.json';

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');

// getCurrentQuestion()
async function getCurrentQuestion() {
    try{
        const pContract = new ethers.Contract(contractAddress, contractAbi.abi, provider);
        return await pContract.currentQuestion();
    }catch(e){console.error(e)}
}

export default getCurrentQuestion;