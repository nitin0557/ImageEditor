import React, { useEffect, useRef } from 'react';
import  {fabric}  from 'fabric';

const FabricCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize fabric canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,
    });

    // Load dummy image and add to canvas
    fabric.FabricImage.fromURL('https://picsum.photos/200/300', (img) => {
      img.scaleToWidth(300); // Resize image to 300px width
      canvas.add(img);
    });

    return () => {
      canvas.dispose(); // Cleanup canvas when component unmounts
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default FabricCanvas;
