import {ethers} from 'ethers';

import contractAbi from '../../contracts/MillionaireGame.json';

// MillionaireGame contract address = 0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b

const contractAddress = '0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b';

const provider = new ethers.JsonRpcProvider('https://rpc-amoy.polygon.technology/');

// read contract 
const pContract = new ethers.Contract(contractAddress, contractAbi, provider);

// const signer = await provider.getSigner();
// sign contract
// const sContract = new ethers.Contract(contractAddress, contractAbi, signer);



// Export the write contract instance
export default pContract;

export async function registerUser() {
    try {
    const signer = await provider.getSigner();
    // signer contract
    const sContract = new ethers.Contract(contractAddress, contractAbi, signer);    
    const txn = await sContract.register();
    await txn.wait();
    console.log("user registered")
    }
    catch (error) {
        console.error('user registeration failed', error);
    }
}

// setPreferredProtocol(Protocol protocol)
export async function setProtocol(protocol: string) {
    try {
        const signer = await provider.getSigner();
        // signer contract
        const sContract = new ethers.Contract(contractAddress, contractAbi, signer);
        const tx = await sContract.setPreferredProtocol(protocol);
        await tx.wait();
    } catch(error) {
        console.error
    }
}

// getCurrentQuestion()
export async function getCurrentQuestion() {
    try{
        return await pContract.currentQuestion();
    }catch(e){console.error(e)}
}

export async function getQuestion() {
    try {
        const result = await pContract.getQuestion();
        return { question: result[0], choices: result[1] };
    } catch (error) {
        console.error('Error getting question:', error);
        throw error;
    }
}

export async function answerQuestion(choice: string) {
    try {
        const signer = await provider.getSigner();
        // signer contract
        const sContract = new ethers.Contract(contractAddress, contractAbi, signer);
        await sContract.answerQuestion(choice);
        console.log('Answer submitted successfully');
    } catch (error) {
        console.error('Error answering question:', error);
        throw error;
    }
}

export async function useLifeline(lifeline: number) {
    try {
        const signer = await provider.getSigner();
        // signer contract
        const sContract = new ethers.Contract(contractAddress, contractAbi, signer);
        await sContract.useLifeline(lifeline);
        console.log('Lifeline used successfully');
    } catch (error) {
        console.error('Error using lifeline:', error);
        throw error;
    }
}

export async function claimTokens() {
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

export async function calculateParticipationTokens(){
    try {
        // Call the calculateParticipationTokens function on the contract
        const signer = await provider.getSigner();
        // signer contract
        const sContract = new ethers.Contract(contractAddress, contractAbi, signer);
        const participationTokens = await sContract.calculateParticipationTokens();
        return participationTokens.toNumber();
    } catch (error) {
        console.error('Error calculating participation tokens:', error);
        throw error;
    }
}

export async function getWinner(questionIndex: number) {
    try {
        // Call the getWinner function on the contract
        const winner = await pContract.getWinner(questionIndex);
        return winner;
    } catch (error) {
        console.error('Error getting winner:', error);
        throw error;
    }
}

export async function endGame() {
    try {
        // Call the endGame function on the contract
        await pContract.endGame();
        console.log('Game ended successfully');
    } catch (error) {
        console.error('Error ending game:', error);
        throw error;
    }
}


