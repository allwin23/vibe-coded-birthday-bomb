import React from 'react';

interface ScrapbookPageProps {
  children: React.ReactNode;
}

const ScrapbookPage: React.FC<ScrapbookPageProps> = ({ children }) => {
  return (
    <div className="relative w-full max-w-4xl mx-auto p-8 bg-amber-50 shadow-lg rounded-lg border-4 border-amber-200">
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-rose-200 transform rotate-45"></div>
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-200 transform rotate-45"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ScrapbookPage;
