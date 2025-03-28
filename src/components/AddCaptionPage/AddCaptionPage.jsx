import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fabric } from 'fabric';
import axios from 'axios';
import { Button, CaptionInput, CaptionPageContainer, ControlsContainer, DownloadButtonContainer, ErrorMessage, ImageContainer, MainContainer } from '../../style/AddCaptionPage';

function AddCaptionPage() {
  const { imageId } = useParams();
  const [caption, setCaption] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const UNSPLASH_ACCESS_KEY = '7To0Rjwsuimo3buWJmlk8l5ju-e3x3K1EuM4TdeZnQk';
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/${imageId}?client_id=${UNSPLASH_ACCESS_KEY}`
        );
        setImageUrl(response.data.urls.regular);
        console.log('Image URL fetched:', response.data.urls.regular);
      } catch (err) {
        setError('Error fetching image. Please try again.');
        console.error('Error fetching image:', err);
      }
    };

    if (imageId) {
      fetchImage();
    }
  }, [imageId]);

  useEffect(() => {
    const fabricCanvas = new fabric.Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: '#fff',
    });
    setCanvas(fabricCanvas);
    console.log('Canvas initialized');

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (canvas && imageUrl) {
      console.log('Loading image onto canvas:', imageUrl);
      fabric.Image.fromURL(
        imageUrl,
        (img) => {
          img.scaleToWidth(canvas.width);
          img.scaleToHeight(canvas.height);
          canvas.add(img);
          canvas.sendToBack(img); // Image as background layer
          canvas.renderAll();
        },
        { crossOrigin: 'anonymous' }
      );
    }
  }, [canvas, imageUrl]);

  const addTextLayer = () => {
    if (!caption.trim()) {
      setError('Please enter a valid caption.');
      return;
    }

    const text = new fabric.Textbox(caption, {
      left: 100,
      top: 100,
      fontSize: 20,
      fill: 'black',
      editable: true,
    });
    text.set({ selectable: true, resizable: true });
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.bringToFront(text);
    canvas.renderAll();
  };

  const addShape = (shapeType) => {
    let shape;

    switch (shapeType) {
      case 'triangle':
        shape = new fabric.Triangle({ width: 100, height: 100, fill: 'blue', left: 100, top: 100 });
        break;
      case 'circle':
        shape = new fabric.Circle({ radius: 50, fill: 'red', left: 100, top: 100 });
        break;
      case 'rectangle':
        shape = new fabric.Rect({ width: 120, height: 80, fill: 'green', left: 100, top: 100 });
        break;
      case 'polygon':
        shape = new fabric.Polygon([{ x: 200, y: 0 }, { x: 250, y: 50 }, { x: 300, y: 0 }, { x: 275, y: 100 }], {
          fill: 'orange',
          left: 100,
          top: 100,
        });
        break;
      default:
        return;
    }

    shape.set({ selectable: true, resizable: true });
    canvas.add(shape);
    canvas.bringToFront(shape);
    canvas.renderAll();
  };

  // Download canvas as an image
  const downloadCanvas = () => {
    try {
      const dataUrl = canvas.toDataURL({
        format: 'png',
        quality: 0.8,
      });
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'canvas-image.png';
      link.click();
    } catch (err) {
      setError('Failed to download the image. Please try again.');
      console.error('Error downloading image:', err);
    }
  };

  // Log all canvas layers and their attributes
  const logCanvasLayers = () => {
    const canvasObjects = canvas.getObjects();
    const layersInfo = canvasObjects.map((obj) => {
      return {
        type: obj.type,
        left: obj.left,
        top: obj.top,
        width: obj.width || obj.getScaledWidth(),
        height: obj.height || obj.getScaledHeight(),
        text: obj.text || '',
        fill: obj.fill || '',
      };
    });
    console.log('Canvas Layers:', layersInfo);
  };

  return (
    <CaptionPageContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <MainContainer>
        <ImageContainer>
          <canvas ref={canvasRef} id="canvas" />
        </ImageContainer>

        <ControlsContainer>
          <CaptionInput
            type="text"
            placeholder="Add Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <Button onClick={addTextLayer}>Add Caption Text</Button>
          <Button onClick={() => addShape('triangle')}>Add Triangle</Button>
          <Button onClick={() => addShape('circle')}>Add Circle</Button>
          <Button onClick={() => addShape('rectangle')}>Add Rectangle</Button>
          <Button onClick={() => addShape('polygon')}>Add Polygon</Button>
        </ControlsContainer>
      </MainContainer>

      <DownloadButtonContainer>
        <Button onClick={downloadCanvas}>Download</Button>
        <Button onClick={logCanvasLayers}>Log Canvas Layers</Button>
      </DownloadButtonContainer>
    </CaptionPageContainer>
  );
}

export default AddCaptionPage;


