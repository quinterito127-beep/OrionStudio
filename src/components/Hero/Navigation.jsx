export default function Navigation({ next, previous }) {
    return (
        <>
            <button
                className="nav left"
                onClick={previous}
            >
                ←
            </button>

            <button
                className="nav right"
                onClick={next}
            >
                →
            </button>
        </>
    );
}