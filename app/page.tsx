'use client';

export default function Home() {
  // Manually ImgBB links yahan paste kar dena (upload hone ke baad copy-paste)
  const screenshots = [
    // Example: "https://i.ibb.co/abc123/whatsapp-call-1.jpg",
    // Add more as they come from notifications
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Kid Video Call Screenshots</h1>
      
      <div className="text-center mb-8">
        <p className="text-xl mb-4">New screenshots ImgBB pe upload ho rahe hain.</p>
        <p className="text-lg">Kid ke phone pe notification mein direct link aayega – usko copy karke yahan add kar do ya ImgBB album check karo.</p>
        <a 
          href="https://imgbb.com/" 
          target="_blank" 
          className="text-green-400 underline"
        >
          ImgBB pe jaake album banao / dekho
        </a>
      </div>

      {screenshots.length === 0 ? (
        <p className="text-center text-2xl mt-20">Abhi koi screenshot nahi – video call hone pe auto upload hoga!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {screenshots.map((url, i) => (
            <div key={i} className="bg-zinc-900 p-4 rounded-xl">
              <img src={url} alt="Screenshot" className="w-full rounded mb-2" />
              <p className="text-center">Screenshot {i+1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
