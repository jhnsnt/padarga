'use client';

import Header from "@/components/Header";
import Story from "@/components/Story";
import Nav from "@/components/Nav";
import Message from "@/components/Message";
import Feed from "@/components/Feed";
export default function Home() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
                <div className="w-full lg:w-[20%]">
                </div>
                <div className="w-full lg:w-[60%] bg-white py-5 lg:pb-0">
                    <div className="w-full grid-rows-3">
                        <div className="w-full block mx-auto">
                            <Header />
                            <Story />
                        </div>
                        <div className="w-full block m-auto">
                            <Feed />
                        </div>
                    </div>
                </div>
                <Message />
            </div>
            <Nav />
        </div>
    );
}
