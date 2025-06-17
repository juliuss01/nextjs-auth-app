"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (status === "unauthenticated") {
    return null; // while redirect happens
  }

  const stats = [
    { title: "Total Students", value: 120 },
    { title: "Fees Paid", value: "₵35,000" },
    { title: "Courses", value: 18 },
    { title: "Lecturers", value: 10 },
    { title: "Teaching Assistants", value: 7 },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Welcome, {session?.user?.name ?? "User"}
        </h1>
        <button
          onClick={() => signOut()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition"
          >
            <h2 className="text-gray-500 text-sm uppercase mb-2">{stat.title}</h2>
            <p className="text-2xl font-semibold text-blue-700">{stat.value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
