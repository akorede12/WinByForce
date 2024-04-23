import React from 'react';
import Image from 'next/image';
import type { FC } from 'react';

interface LeaderboardPopupProps {
    onClose: () => void;
}

interface Participant {
    id: number;
    name: string;
    points: number;
    icon: string;  // Using JSX.Element to store SVG directly
}

const participants: Participant[] = [
    { id: 1, name: "Alice", points: 1200, icon: "/user.png" },
    { id: 2, name: "Bob", points: 1100, icon: "/user.png" },
    { id: 3, name: "Alice", points: 1200, icon: "/user.png" },
    { id: 4, name: "Bob", points: 1100, icon: "/user.png" },
    { id: 5, name: "Alice", points: 1200, icon: "/user.png" },
    { id: 6, name: "Bob", points: 1100, icon: "/user.png" },
    // Add more participants as needed
];

const LeaderboardPopup: FC<LeaderboardPopupProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-[#020304] bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-[#020304] rounded-lg shadow-xl p-6 relative">
                <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold text-white flex items-center">
                        Leaderboard
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='flex'>
                    <Image src="/book.png" width={20} height={20} alt="book icon" className='mr-2' />
                    <p className="text-[#F451E4] text-sm mt-1">Polygon Innovation and Design</p>
                </div>
                <div className="flex justify-center items-end space-x-4 mt-4 mb-4">
                    <Image src="/lbImg2.png" width={64} height={64} className="rounded-full" alt="2nd Place" />
                    <Image src="/lbImg1.png" width={80} height={80} className="rounded-full relative mb-8" alt="1st Place" style={{ zIndex: 10 }} />
                    <Image src="/lbImg3.png" width={64} height={64} className="rounded-full" alt="3rd Place" />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {participants.map((participant, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-lg text-white">{participant.id}</span>
                            <Image src={participant.icon} alt="Profile" width={32} height={32} className="mx-2" />
                            <span className="flex-1 text-sm text-gray-100">{participant.name}</span>
                            <span className="text-xs text-gray-100">{participant.points} pts</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPopup;
