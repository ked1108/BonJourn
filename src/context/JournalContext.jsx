import { createContext, useState, useEffect } from 'react';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
    const [entries, setEntries] = useState(() => {
        const stored = localStorage.getItem('journals');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('journals', JSON.stringify(entries));
    }, [entries]);

    return (
        <JournalContext.Provider value={{ entries, setEntries }}>
            {children}
        </JournalContext.Provider>
    );
};
