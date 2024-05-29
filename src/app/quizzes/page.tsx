'use client';

import { FC, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from "@/components/header/Navbar";
import { ethers, Contract } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import MillionaireGameABI from "@/contracts/MillionaireGame.json";

const contractAddress = "0x1fFac3b1a9F2186E7E6f3370d827B2b35A17B31b";

/* 
getCurrentQuestion 
getQuestion 
answerQuestion 
useLifeline  
claimTokens 
calculateParticipationTokens 
getWinner */



const Quizzes: FC = () => {
    const [provider, setProvider] = useState<Web3Provider | null>(null);
    const [gameContract, setGameContract] = useState<Contract | null>(null);
    const [question, setQuestion] = useState<string>('');
    const [answers, setAnswers] = useState<string[]>([]);
    const [questionNumber, setQuestionNumber] = useState<number>(0);

    const fetchQuestion = useCallback(async () => {
        if (!gameContract) return;
        const currentQuestion = await gameContract.getCurrentQuestion();
        if (typeof currentQuestion === 'object' && currentQuestion.question && Array.isArray(currentQuestion.choices)) {
            setQuestion(currentQuestion.question);
            setAnswers(currentQuestion.choices);
            setQuestionNumber(await gameContract.currentQuestionIndex());
        }
    }, [gameContract]);

    useEffect(() => {
        const initEthers = async () => {
            if (window.ethereum) {
                try {
                    const provider = new Web3Provider(window.ethereum);
                    await provider.send("eth_requestAccounts", []); // Request account access
                    const signer = provider.getSigner() as any;
                    const address = await signer.getAddress(); // Will throw if no accounts are connected
                    const gameContract = new Contract(contractAddress, MillionaireGameABI.abi, signer);
                    setProvider(provider);
                    setGameContract(gameContract);
                    fetchQuestion();
                } catch (error) {
                    console.error("Error initializing ethers:", error);
                }
            } else {
                console.error("Please install MetaMask!");
            }
        };

        initEthers();
    }, [fetchQuestion]);


    const handleAnswer = async (index: number) => {
        if (!gameContract) return;
        await gameContract.answerQuestion(index.toString());
        fetchQuestion();  // Fetch the next question after answering
    };

    return (
        <div className="bg-[#020304] min-h-screen flex flex-col pb-8">
            <NavBar />
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="bg-black rounded-lg" style={{
                    width: '1163px', height: '568px', marginTop: '148px', marginLeft: 'auto', marginRight: 'auto',
                    backgroundImage: 'url(/quizlobbyImg.png)', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center my-4 mx-4">
                        {answers.map((answer, index) => (
                            <button key={index}
                                onClick={() => handleAnswer(index)}
                                className="bg-[#0B0D0D] hover:bg-white text-white font-semibold py-2 border-[#F451E4] border-2 w-80 sm:w-96 rounded-full text-center">
                                {`${String.fromCharCode(65 + index)}. ${answer}`}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quizzes;
