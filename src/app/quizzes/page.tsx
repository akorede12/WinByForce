'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from "@/components/header/Navbar";

const Quizzes: FC = () => {

    // State to keep track of the current question number
    const [questionNumber, setQuestionNumber] = useState(1);
    const [question, setQuestion] = useState("What is zkSync primarily known for?");

    // Dummy data for answers
    const answers = [
        "Decentralized exchange",
        "Proof of stake",
        "Scalable ethereum",
        "Consensus algorithm"
    ];

    // Function to go to the next question
    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        // Here you could also change the `question` state to the next question based on logic
    };


    return (
        <div className="bg-[#020304] min-h-screen flex flex-col pb-8">
            <NavBar />
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="bg-black rounded-lg" style={{
                    width: '1163px', height: '568px', marginTop: '148px', marginLeft: 'auto', marginRight: 'auto',
                    backgroundImage: 'url(/quizlobbyImg.png)', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                    <div className="flex justify-between items-center px-12 py-4">
                        <div className="flex items-center">
                            <Image className='mr-4' src="/group.png" alt="Group icon" width={28} height={28} />
                            <Link href="/opts" className="text-white text-md sm:text-lg">Opts</Link>
                        </div>
                        <div className="flex items-center">
                            <Link href="/leaderboard" className="text-white text-md sm:text-lg mr-4">LEADERBOARD</Link>
                            <Link href="/leave-game" className="text-white text-md sm:text-lg">LEAVE GAME</Link>
                        </div>
                    </div>

                    {/* Question navigation and display */}
                    <div className="text-center mb-4">
                        <h2 className="text-[#F451E4] text-md mb-4 inline-block p-2 border border-[#F451E4] rounded-full cursor-pointer" onClick={nextQuestion}>
                            Question {questionNumber}
                        </h2>
                        <p className="text-white text-xl w-64 mx-auto text-center break-words">
                            {question}
                        </p>

                    </div>
                    <hr className="mx-20 my-16" style={{ borderColor: '#C510C9' }} />

                    {/* Answers grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center my-4 mx-4">
                        {answers.map((answer, index) => (
                            <button key={index}
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