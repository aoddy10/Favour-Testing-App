import { useLocation } from "react-router-dom";

function ErrorPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const errorMessage = queryParams.get("message");

    return (
        <div className="flex flex-col justify-center items-center h-svh space-y-2 text-gray-400">
            <h1 className="text-xl">Error Page</h1>
            {errorMessage && <p className="">{errorMessage}</p>}
        </div>
    );
}

export default ErrorPage;
