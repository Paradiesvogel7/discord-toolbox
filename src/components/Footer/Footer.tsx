import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="z-30 ml-8 mb-8 text-small text-white flex gap-4">
        © {new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  );
};
