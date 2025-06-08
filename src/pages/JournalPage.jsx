import { useState, useContext } from 'react';
import JournalList from '../components/JournalList';
import HeroBanner from "../components/HeroBanner.jsx";
import { JournalContext } from '../context/JournalContext';
import './JournalPage.css';
import journalImg from '../assets/journal.jpg'

const JournalPage = () => {
    const {entries, setEntries} = useContext(JournalContext);
    const [form, setForm] = useState({
        title: '',
        date: '',
        content: '',
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {
            id: entries.length + 1,
            ...form,
        };
        setEntries([...entries, newEntry]);
        setForm({ title: '', date: '', content: '' });
    };

    return (
        <div>
            <HeroBanner title={"Your Journal 📒"} subtitle={""} backgroundImage={journalImg} />
            <div className="journal-page">
                <div className="journal-content">
                    <div className="journal-list-section">
                        <JournalList entries={[...entries].sort((a, b) => new Date(b.date) - new Date(a.date))} />
                    </div>

                    <form className="journal-form" onSubmit={handleSubmit}>
                        <h2>Add New Entry</h2>
                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="Entry Title"
                            required
                        />
                        <input
                            name="date"
                            type="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="content"
                            value={form.content}
                            onChange={handleChange}
                            placeholder="Write your thoughts..."
                            required
                        />
                        <button type="submit">Add Entry</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JournalPage;
