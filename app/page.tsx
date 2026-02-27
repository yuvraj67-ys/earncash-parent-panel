'use client';

export default function Home() {
  // Har notification se ImgBB link copy karke yahan paste kar dena
  // Example format:
  const screenshots = [
    // "https://i.ibb.co/XXXXXX/whatsapp-call-123456789.jpg",
    // "https://i.ibb.co/YYYYYY/instagram-call-987654321.jpg",
    // ... add more
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Kid Video Call Screenshots</h1>

      <div className="text-center mb-10 bg-zinc-900 p-6 rounded-xl">
        <p className="text-xl mb-4">Kaise dekhein screenshots:</p>
        <ol className="text-left max-w-2xl mx-auto text-lg space-y-3">
          <li>1. Kid ke phone pe notification aayega "Screenshot captured: https://i.ibb.co/..."</li>
          <li>2. Link ko long-press karke copy kar lo</li>
          <li>3. Yahan screenshots array mein paste kar do (repo edit kar ke commit)</li>
          <li>Ya direct browser mein link khol do</li>
          <li>Best: ImgBB pe album banao aur sab links usme add kar lo (manual)</li>
        </ol>
        <a 
          href="https://imgbb.com/" 
          target="_blank" 
          className="mt-6 inline-block bg-green-600 px-6 py-3 rounded text-lg"
        >
          ImgBB kholo (album banao)
        </a>
      </div>

      {screenshots.length === 0 ? (
        <p className="text-center text-2xl mt-20">Abhi koi screenshot nahi uploaded. Video call hone pe notification aayega!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((url, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl">
              <img src={url} alt={`Screenshot ${i+1}`} className="w-full rounded mb-2" />
              <p className="text-center">Screenshot {i+1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
