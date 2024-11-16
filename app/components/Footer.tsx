import { HeartIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p>©2024 AUTODIENST24 - Alle Rechte vorbehalten</p>
          <p className="flex items-center gap-1">
            Made with <HeartIcon size={16} className="text-red-500" /> by 
            <a href="https://unicodes.dev" className="text-red-400 hover:text-red-300">UNICodes.dev</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 