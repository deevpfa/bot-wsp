import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ChatWidget = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;
        setMessages((prev) => [...prev, inputValue]);
        setInputValue('');
        setTimeout(() => {
            setMessages((prev) => [...prev, 'Hello! This is a sample reply.']);
        }, 1000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <>
            <div id="chat-widget-container" className={`!text-sm !font-semibold fixed bottom-5 z-[9999999999] right-5 flex flex-col`}>
                <div
                    id="chat-bubble"
                    className={`${!isPopupVisible ? '' : 'hidden'} w-16 h-16 lg:w-16 lg:h-16 bg-primary-700 rounded-full flex items-center justify-center cursor-pointer !text-xl`}
                    onClick={togglePopup}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className=" w-10 h-10 text-white" fill="#DA465A" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    {/* <div className='items-center group transition-all  delay-1000 lg:flex hidden'>
                        <div className=" text-white group-hover:opacity-100 group-hover:block hidden transition-all opacity-0 delay-1000 pr-2 text-xs">Chatea</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="#DA465A" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </div> */}
                </div>
                <div id="chat-popup" className={`${isPopupVisible ? '' : 'hidden'} fixed bottom-2 right-2 w-[350px] h-[400px] lg:w-[600px] lg:h-[500px] bg-white rounded-md shadow-md flex flex-col transition-all text-sm md:static md:top-0 md:right-0 md:bottom-0 md:left-0 md:w-full md:h-full md:max-h-full md:rounded-none`}>
                    <div id="chat-header" className="flex justify-between items-center px-4 py-2 bg-primary-700 text-white rounded-t-md">
                        <div className='flex items-center'>
                            <Image src="/images/IsoSinFondo.png" alt="logo" width={50} height={50} />
                            <h3 className="m-0">Demesc Bot</h3>
                        </div>
                        <button id="close-popup" className="bg-transparent border-none text-white cursor-pointer" onClick={togglePopup}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div id="chat-messages" className="flex-1  p-4 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className={`flex ${index % 2 === 0 ? 'justify-end' : ''} mb-3`}>
                                <div className={`rounded-lg py-2 px-4 max-w-[70%] ${index % 2 === 0 ? 'bg-secondary-500 text-white' : 'bg-gray-200 text-black'}`}>
                                    {message}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="chat-input-container" className="p-4 border-t border-gray-200">
                        <div className="flex space-x-4 items-center">
                            <input
                                type="text"
                                id="chat-input"
                                className="flex-1 border border-gray-300 rounded-md px-4 py-2 outline-none w-3/4"
                                placeholder="Mensaje..."
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                            />
                            <button id="chat-submit" className="bg-primary-500 rounded-full text-white  p-2.5 cursor-pointer" onClick={handleSend}>
                                <PaperAirplaneIcon className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatWidget;
