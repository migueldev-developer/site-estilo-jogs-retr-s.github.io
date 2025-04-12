
import PixelText from './PixelText';

const PixelFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-pixel-blue py-8">
      <div className="pixel-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-3 h-3 bg-pixel-blue"></div>
              <PixelText variant="subheading">MIGUEL PORTFOLIO</PixelText>
            </div>
          </div>
          
          <div className="font-pixel-mono text-pixel-blue text-center md:text-right">
            <p>&copy; {currentYear} All rights reserved</p>
            <p className="mt-1 text-xs">Made with pixel perfect precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PixelFooter;
