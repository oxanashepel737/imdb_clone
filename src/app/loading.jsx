import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex justify-center">
            <Image
                className="h-96"
                src="spinner.svg"
                alt="loading..."
                fill={true}
            />
        </div>
    )
}
export default Loading;