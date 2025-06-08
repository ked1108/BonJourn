import React, { useState, useEffect, useContext } from 'react';
import Calendar from '../components/Calendar';
import TaskList from '../components/TaskList';
import JournalList from '../components/JournalList';
import HeroBanner from "../components/HeroBanner.jsx";

import { TaskContext } from '../context/TaskContext';
import { JournalContext } from '../context/JournalContext';

import hero from  '../assets/hero.jpg';
import './Home.css';

const Home = () => {
    const { tasks } = useContext(TaskContext);
    const { entries } = useContext(JournalContext);

    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filteredJournals, setFilteredJournals] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeTab, setActiveTab] = useState('tasks');

    const isSameDate = (date1, date2) => {
        return (
            new Date(date1).getFullYear() === date2.getFullYear() &&
            new Date(date1).getMonth() === date2.getMonth() &&
            new Date(date1).getDate() === date2.getDate()
        );
    };

    useEffect(() => {
        const ft = tasks.filter(task => isSameDate(task.date, selectedDate));
        const fj = entries.filter(entry => isSameDate(entry.date, selectedDate));

        setFilteredTasks(ft);
        setFilteredJournals(fj);
    }, [selectedDate, tasks, entries]);
    return (
    <div>
        <HeroBanner title={"Welcome to BonJourn"} subtitle={"Plan your tasks. Reflect your thoughts."} backgroundImage={hero} />
        <div className="home-container">
            <div className="calendar-section">
                <Calendar selectedDate={selectedDate} onDateChange={setSelectedDate} />
            </div>

            <div className="tabbed-panel glass-box">
                <div className="tabs">
                    <button
                        className={activeTab === 'tasks' ? 'active' : ''}
                        onClick={() => setActiveTab('tasks')}
                    >
                        Tasks
                    </button>
                    <button
                        className={activeTab === 'journal' ? 'active' : ''}
                        onClick={() => setActiveTab('journal')}
                    >
                        Journal
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'tasks' ? (
                        <TaskList tasks={filteredTasks} />
                    ) : (
                        <JournalList entries={filteredJournals} />
                    )}
                </div>
            </div>
        </div>
    </div>
    );
};

export default Home;
