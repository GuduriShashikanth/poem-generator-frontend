// src/components/PoemForm.tsx
import { useState } from "react";

interface PoemFormProps {
  onGenerate: (mood: string, words: string, type: string, lines?: number) => void;
}

export default function PoemForm({ onGenerate }: PoemFormProps) {
  const [mood, setMood] = useState("happy");
  const [words, setWords] = useState("");
  const [type, setType] = useState("haiku");
  const [lines, setlines] = useState(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(mood, words, type, type === "haiku" ? lines : undefined);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-purple-700 text-center">Generate Your Poem</h2>
      
      <label className="block mb-2 font-semibold">Mood:</label>
      <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full p-2 mb-4 border rounded">
<option value="happy">Happy</option>
<option value="sad">Sad</option>
<option value="romantic">Romantic</option>
<option value="nostalgic">Nostalgic</option>
<option value="angry">Angry</option>
<option value="peaceful">Peaceful</option>
<option value="melancholic">Melancholic</option>
<option value="joyful">Joyful</option>
<option value="hopeful">Hopeful</option>
<option value="anxious">Anxious</option>
<option value="playful">Playful</option>
<option value="mysterious">Mysterious</option>
<option value="lonely">Lonely</option>
<option value="grateful">Grateful</option>
<option value="curious">Curious</option>
<option value="dreamy">Dreamy</option>
<option value="inspired">Inspired</option>
<option value="confused">Confused</option>
<option value="excited">Excited</option>
<option value="serene">Serene</option>

      </select>

      <label className="block mb-2 font-semibold">Word Prompts (comma separated):</label>
      <input type="text" value={words} onChange={(e) => setWords(e.target.value)} className="w-full p-2 mb-4 border rounded" />

      <div className="mb-4">
        <span className="block font-semibold mb-2">Poem Type:</span>
        <label className="mr-4">
          <input type="radio" value="haiku" checked={type === "haiku"} onChange={(e) => setType(e.target.value)} />
          <span className="ml-2">Haiku</span>
        </label>
        <label>
          <input type="radio" value="freeverse" checked={type === "freeverse"} onChange={(e) => setType(e.target.value)} />
          <span className="ml-2">Free Verse</span>
        </label>
      </div>

      {type === "haiku" && (
        <div className="mb-4">
          <label className="block font-semibold">Number of Lines:</label>
          <input type="number" value={lines} onChange={(e) => setlines(Number(e.target.value))} min={3} max={10} className="w-24 p-2 border rounded mt-1" />
        </div>
      )}

      <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded hover:bg-pink-500 transition">
        Generate
      </button>
    </form>
  );
}
