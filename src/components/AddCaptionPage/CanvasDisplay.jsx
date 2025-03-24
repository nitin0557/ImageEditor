import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

const CanvasDisplay = React.memo(({ imageUrl, setCanvas }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: '#fff',
    });
    setCanvas(fabricCanvas);

    // Cleanup function to dispose of canvas when the component unmounts
    return () => {
      fabricCanvas.dispose();
    };
  }, [setCanvas]);

  useEffect(() => {
    if (imageUrl && canvasRef.current) {
      fabric.Image.fromURL(
        imageUrl,
        (img) => {
          img.scaleToWidth(canvasRef.current.width); // Scale the image to fit canvas width
          img.scaleToHeight(canvasRef.current.height); // Scale the image to fit canvas height

          const fabricCanvas = canvasRef.current.__fabric; // Access the canvas instance
          fabricCanvas.add(img); // Add the image to the canvas
          fabricCanvas.sendToBack(img); // Send the image to the back
          fabricCanvas.renderAll(); // Render the canvas with the image
        },
        { crossOrigin: 'anonymous' } // Allow cross-origin images
      );
    }
  }, [imageUrl]);

  return <canvas ref={canvasRef} id="canvas" />;
});

export default CanvasDisplay;
