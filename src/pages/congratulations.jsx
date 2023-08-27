import Link from "next/link";

const CongratulationsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold mb-4 text-blue-600">
        Congratulations!
      </h1>
      <p className="text-3xl mb-8 text-blue-400">
        You have successfully built your PC.
      </p>
      <Link
        href="/"
        className="bg-cyan-400 border rounded-lg p-3 text-white font-semibold"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default CongratulationsPage;
