import { useEffect, useRef } from 'react';

const TuComponente = () => {
  const refVideo = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const video = refVideo.current;

      if (video) {
        const newVideoSource = window.innerWidth >= 1024
          ? 'https://sharedby.blomp.com/kzv6mK'
          : 'https://sharedby.blomp.com/otrovideo';

        video.src = newVideoSource;
        video.load(); // Recarga el video con el nuevo origen
      }
    };

    // Establece el origen del video al cargar la página
    handleResize();

    // Agrega un listener para cambiar el origen del video al cambiar el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  export default TuComponente;