import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

      <div className="flex space-x-4">
        <Link href="/register">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Register
          </button>
        </Link>

        <Link href="/login">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Login
          </button>
        </Link>
      </div>
    </main>
  );
}
