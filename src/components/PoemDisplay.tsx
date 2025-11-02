interface PoemDisplayProps {
  poem: string;
}

export default function PoemDisplay({ poem }: PoemDisplayProps) {
  return (
    <div className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-xl whitespace-pre-line animate-fade-in">
      <h2 className="text-2xl font-bold text-purple-700 text-center mb-4">Your Poem</h2>
      <p className="text-gray-800 text-lg leading-relaxed">{poem}</p>
    </div>
  );
}
