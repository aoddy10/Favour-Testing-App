type NoDataFoundBoxProps = {
    message: string;
};

export default function NoDataFoundBox({ message }: NoDataFoundBoxProps) {
    return (
        <div className="flex justify-center items-center text-gray-200 rounded-xl h-40 bg-background">
            {message}
        </div>
    );
}
