import { useState } from "react";
import PoemForm from "../components/PoemForm";
import PoemDisplay from "../components/PoemDisplay";
import axios from "axios";

export default function Home() {
  const [poem, setPoem] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastInputs, setLastInputs] = useState<{
    mood: string;
    words: string;
    type: string;
    lines?: number;
  } | null>(null);

  const generatePoem = async (mood: string, words: string, type: string, lines?: number) => {
    try {
      setLoading(true);
      setLastInputs({ mood, words, type, lines });

      const response = await axios.post("https://poem-generator-backend-1ehz.onrender.com/generate-poem", {
        mood,
        words,
        type,
        lines,
      });

      setPoem(response.data.poem);
    } catch (err) {
      console.error(err);
      setPoem("Failed to generate poem. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const regeneratePoem = () => {
    if (!lastInputs) return;
    generatePoem(lastInputs.mood, lastInputs.words, lastInputs.type, lastInputs.lines);
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Form */}
        <div className="md:w-1/2">
          <PoemForm onGenerate={generatePoem} />
        </div>

        {/* Right Column: Poem Display */}
        <div className="md:w-1/2 flex flex-col items-center">
          {/* Loading animation */}
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="w-12 h-12 border-4 border-purple-700 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-gray-500 italic">Generating your poem...</p>
            </div>
          ) : poem ? (
            <>
              <PoemDisplay poem={poem} />
              <button
                onClick={regeneratePoem}
                className="mt-4 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-pink-500 transition"
              >
                Regenerate
              </button>
            </>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-400 italic">
              Your generated poem will appear here.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
