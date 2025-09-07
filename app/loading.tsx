'use client';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1121]/50 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#00E5FF] border-t-transparent" />
        <p className="text-[#00E5FF] animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
