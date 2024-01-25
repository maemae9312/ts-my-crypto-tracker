import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-3 text-white">
      {/* ナビゲーションリンクをここに配置 */}
      <a href="/" className="p-2 hover:bg-gray-700">Home</a>
      <a href="/portfolio" className="p-2 hover:bg-gray-700">Portfolio</a>
    </nav>
  );
};

export default NavBar;