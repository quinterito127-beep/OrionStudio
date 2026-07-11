export default function Indicators({ total, current }) {
    return (
        <div className="indicators">
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={
                        index === current
                            ? "indicator active"
                            : "indicator"
                    }
                />
            ))}
        </div>
    );
}