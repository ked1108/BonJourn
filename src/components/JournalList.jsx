import './JournalList.css';

const JournalList = ({ entries }) => {
    return (
        <div className="journal-list glass-box">
            <h2>Journal List</h2>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.title}</strong><br />
                        <small>{entry.date}</small>
                        <p>{entry.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default JournalList;
