import React, { useState } from 'react';

interface BlurImageProps {
  src: string;
  placeholderSrc: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
}

export const BlurImage: React.FC<BlurImageProps> = ({
  src,
  placeholderSrc,
  alt,
  className = '',
  onLoad
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {/* Imagen de baja resolución (placeholder) */}
      <img
        src={placeholderSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ filter: 'blur(10px)' }}
      />

      {/* Imagen principal */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
      />
    </div>
  );
};
