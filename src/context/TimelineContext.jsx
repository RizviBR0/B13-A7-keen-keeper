"use client";

import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);

    const addActivity = (type, friendName) => {
        const newActivity = {
            id: Date.now().toString(),
            type,
            friendName,
            date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
        };

        setActivities([newActivity, ...activities]);
        toast.success(`${type} with ${friendName}`);
    };

    return (
        <TimelineContext.Provider value={{ activities, addActivity }}>
            {children}
        </TimelineContext.Provider>
    );
};