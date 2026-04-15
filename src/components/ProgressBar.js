function ProgressBar({ step }) {
    const width = (step / 5) * 100;

    return (
        <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
            <div
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${width}%` }}
            ></div>
        </div>
    );
}

export default ProgressBar;