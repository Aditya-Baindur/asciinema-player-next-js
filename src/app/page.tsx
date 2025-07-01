// app/page.tsx or any other page
import TerminalPlayer from "@/components/player";

export default function Home() {
  return (

    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-xl font-bold mb-4">Terminal Demo</h1>

      <div className="w-full max-w-2xl h-[400px] border border-gray-300 rounded overflow-hidden">
        <TerminalPlayer src="/demo.cast" />
      </div>
    </main>

  );
}
