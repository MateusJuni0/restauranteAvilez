'use client'
// Updated by Lead Designer

export default function PortalMain() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      {/* Premium Michelin-Style Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70 animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
        style={{
          // Image: Dimly lit, elegant restaurant interior with tablecloths
          backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3c6221741?q=80&w=2070&auto=format&fit=crop')",
        }}
      />
      
      {/* Multi-layer Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]"></div>
    </div>
  )
}
