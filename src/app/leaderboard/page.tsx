'use client'

import React, { useState } from 'react';
import Image from 'next/image';

interface Participant {
    id: number;
    name: string;
    points: number;
    icon: string;
}

const participants: Participant[] = [
    { id: 1, name: "Alice", points: 1200, icon: "/user.png" },
    { id: 2, name: "Bob", points: 1100, icon: "/user.png" },
    { id: 3, name: "Alice", points: 1200, icon: "/user.png" },
    { id: 4, name: "Bob", points: 1100, icon: "/user.png" },
    { id: 5, name: "Alice", points: 1200, icon: "/user.png" },
    { id: 6, name: "Bob", points: 1100, icon: "/user.png" },
];

export default function LeaderboardPopup() {
    const [isVisible, setIsVisible] = useState(true);  // Control visibility with state

    const handleClose = () => setIsVisible(false);  // Function to close the popup

    if (!isVisible) return null;  // Don't render if not visible

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 rounded-lg shadow-xl p-6 relative">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">Leaderboard</h2>
                    <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4 mb-4 flex justify-center items-center">
                    {participants.slice(1, 4).map((participant, index) => (
                        <Image key={index} src={participant.icon} width={64 + index * 8} height={64 + index * 8} className="rounded-full" alt={`${participant.name} Place`} />
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {participants.map((participant, index) => (
                        <div key={index} className="flex items-center justify-between text-white">
                            <span className="text-lg">{participant.id}</span>
                            <Image src={participant.icon} alt="Profile" width={32} height={32} className="mx-2" />
                            <span className="flex-1 text-sm">{participant.name}</span>
                            <span className="text-xs">{participant.points} pts</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
