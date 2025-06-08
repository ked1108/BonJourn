import './HeroBanner.css';

const HeroBanner = ({ title, subtitle, backgroundImage }) => {
    return (
        <div
            className="hero-banner"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="hero-overlay">
                <div className="hero-text">
                    <h1>{title}</h1>
                    {subtitle && <p>{subtitle}</p>}
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
