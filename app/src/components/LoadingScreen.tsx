function LoadingScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-gray-500 space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            <p>Loading, please wait...</p>
        </div>
    );
}

export default LoadingScreen;
