'use client'

export default function PortalMain() {
  return (
    <div className="fixed inset-0 -z-10 bg-black flex items-center justify-center text-white/20">
      {/* 3D Background Temporarily Disabled for Deploy Stability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>
    </div>
  )
}
