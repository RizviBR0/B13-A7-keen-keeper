import React from 'react';
import { FaPlus } from 'react-icons/fa';

const loading = () => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center my-10">
            <div className="flex w-52 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>

            <span className="skeleton skeleton-text text-2xl">Loading...</span>
        </div>
    );
};

export default loading;