import React from 'react';

const SideDecorations = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Bluish Neo Background Elements */}
      <div className="absolute top-0 -left-1/4 w-full h-full rounded-full bg-gradient-to-r from-blue-600/40 to-transparent blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 -right-1/4 w-full h-full rounded-full bg-gradient-to-l from-cyan-400/40 to-transparent blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/4 -right-1/3 w-1/2 h-1/2 rounded-2xl bg-gradient-to-l from-indigo-500/30 to-transparent blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 -left-1/3 w-1/2 h-1/2 rounded-2xl bg-gradient-to-r from-purple-500/30 to-transparent blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '3s' }}></div>

      {/* Floating Shapes */}
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-cyan-300/50 rounded-full animate-spin-slow opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border-t-2 border-blue-400/50 rounded-full animate-spin-slow opacity-30" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default SideDecorations;
