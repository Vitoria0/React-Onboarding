import { useState, useRef, useEffect } from 'react';

type Props = {
  src: string;
  placeholderSrc: string;
  alt: string;
};

const LazyImage = ({ src, placeholderSrc, alt = '' }: Props) => {
  const [loadedSrc, setLoadedSrc] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            setLoadedSrc(true);
            observer.disconnect();
          };
          if (imgRef.current) {
            imgRef.current.src = src;
          }
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={loadedSrc ? src : placeholderSrc}
      alt={alt}
      style={{ filter: loadedSrc ? 'blur(0px)' : 'blur(20px)' }}
    />
  );
};

export default LazyImage;
