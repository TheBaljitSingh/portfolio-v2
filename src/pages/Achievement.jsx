import React from 'react';
import { Trophy, Code2, Users } from 'lucide-react';

export default function Achievement() {
  return (
    <section className="min-h-screen px-6 py-16 md:px-20 lg:px-52  text-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Achievements</h2>

      {/* Hackathon Participation */}
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-4">
          <Trophy className="text-yellow-500" />
          <h3 className="text-xl font-semibold">Participated in Various Hackathons</h3>
        </div>
        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
          <li>Solving for India Hackathon (GFG & Google Cloud)</li>
          <li>Let’s Hack Parul (Devfolio & Quine)</li>
          <li>Vadodara Hackathon 4.0</li>
          <li>...and more!</li>
        </ul>
      </div>

      {/* Coding Platforms */}
      <div className="mb-10">
        <div className="flex items-center space-x-3 mb-4">
          <Code2 className="text-blue-600" />
          <h3 className="text-xl font-semibold">Coding Platform Ratings</h3>
        </div>
        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
          <li><strong>1150+</strong> rating on CodeChef</li>
          <li>Solved over <strong>250+</strong> DSA problems across LeetCode, CodeChef & GFG</li>
          <li>Consistent problem-solving and contest participation</li>
        </ul>
      </div>

      {/* Other Skills */}
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <Users className="text-green-600" />
          <h3 className="text-xl font-semibold">Other Skills</h3>
        </div>
        <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
          <li>Team Leader of Hackathon Team <strong>MMBS</strong></li>
          <li>Hardworking and Self-Motivated</li>
          <li>Intellectually Curious and Fast Learner</li>
        </ul>
      </div>
    </section>
  );
}
