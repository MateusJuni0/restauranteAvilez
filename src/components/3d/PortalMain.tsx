'use client'

export default function PortalMain() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Fallback Background: Elegant dark gradient or image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1920&auto=format&fit=crop')", // Abstract culinary/dark texture
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
    </div>
  )
}
