'use client';

import { FC } from 'react';
import Link from 'next/link';
import NavBar from "@/components/header/Navbar";

const QuizLobby: FC = () => {
    return (
        <div className="bg-[#020304] min-h-screen flex flex-col pb-8">
            <NavBar />
            <div className="flex-grow flex items-center justify-center p-4">
                <div className="bg-black rounded-lg" style={{
                    width: '1163px', height: '568px', marginTop: '148px', marginLeft: 'auto', marginRight: 'auto',
                    backgroundImage: 'url(/quizlobbyImg.png)', backgroundSize: 'cover', backgroundPosition: 'center'
                }}>
                    <div className="flex justify-between items-center p-4" style={{ paddingLeft: '48px', paddingRight: '48px' }}>
                        <Link href="/" className="text-white text-md sm:text-lg">RETURN TO LEARNING</Link>
                        <Link href="/" className="text-white text-md sm:text-lg">VIEW LEADERBOARD</Link>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <p className="text-white text-4xl font-bold mb-4">Polygon Innovation</p>
                        <p className="text-white text-4xl font-bold mb-8">and Design</p>
                        <button className="bg-[#C510C9] hover:bg-white text-white font-semibold py-2 border-[#C510C9] border-2 w-40 h-10 rounded-full">
                            <Link href="/quiz">START QUIZ</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizLobby;
