export default function Home() {
  // ----------------- YAHAN LINKS PASTE KARO -----------------
  // Kid ke phone se notification aane pe ImgBB link copy karo
  // Aur yahan array mein add kar do → save → Vercel auto update
  const screenshots = [
    // Example (real links yahan daalo):
    // "https://i.ibb.co/abc1234/whatsapp-call-1720000000.jpg",
    // "https://i.ibb.co/xyz5678/instagram-video-call-1720001234.jpg",
    
    // Abhi ke liye khali rakho ya test links daal do
  ];

  return (
    <main className="min-h-screen p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green-400">
        EarnCash – Kid Video Call Screenshots
      </h1>

      <div className="max-w-4xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-700 mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Kaise Dekhein Screenshots?</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg">
          <li>Kid ke phone pe notification aayega: "Screenshot captured: https://i.ibb.co/..."</li>
          <li>Notification ko expand karo → link long-press → Copy</li>
          <li>Yahan <strong>screenshots</strong> array mein paste kar do (code edit karo)</li>
          <li>GitHub pe commit karo → Vercel auto update ho jaayega (1-2 min)</li>
          <li>Ya direct link browser mein khol do</li>
          <li>Best tareeka: ImgBB pe ek album banao aur sab images usme add kar lo</li>
        </ol>
        <div className="mt-8 text-center">
          <a
            href="https://imgbb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-xl font-medium"
          >
            ImgBB Kholo → Album Banao
          </a>
        </div>
      </div>

      {screenshots.length === 0 ? (
        <div className="text-center text-xl text-zinc-400 mt-20">
          Abhi koi screenshot nahi hai.<br />
          Jab kid WhatsApp/Instagram video call karega → auto upload hoga aur notification aayega.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((url, index) => (
            <div 
              key={index} 
              className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-lg"
            >
              <img 
                src={url} 
                alt={`Screenshot ${index + 1}`} 
                className="w-full h-auto object-contain"
              />
              <p className="p-4 text-center text-sm text-zinc-300">
                Screenshot {index + 1}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
