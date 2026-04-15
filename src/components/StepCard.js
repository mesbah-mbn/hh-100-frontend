function StepCard({ image, title, onClick }) {
    return (
        <div
            onClick={onClick}
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:scale-105 transition duration-300 border-2 hover:border-green-600"
        >
            <img
                src={image}
                alt={title}
                className="w-32 h-32 object-contain mx-auto"
            />

            <h3 className="text-center mt-4 text-lg font-semibold">
                {title}
            </h3>
        </div>
    );
}

export default StepCard;