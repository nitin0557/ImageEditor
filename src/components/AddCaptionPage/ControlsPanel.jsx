import React, { useState } from 'react';

const ControlsPanel = React.memo(({ addTextLayer, addShape, setCaption }) => {
  const [caption, updateCaption] = useState('');

  const handleAddCaption = () => {
    setCaption(caption);
    addTextLayer();
  };

  return (
    <div className="controls-container">
      <input
        type="text"
        className="caption-input"
        placeholder="Add Caption"
        value={caption}
        onChange={(e) => updateCaption(e.target.value)}
      />
      <button onClick={handleAddCaption}>Add Caption Text</button>
      <button onClick={() => addShape('triangle')}>Add Triangle</button>
      <button onClick={() => addShape('circle')}>Add Circle</button>
      <button onClick={() => addShape('rectangle')}>Add Rectangle</button>
      <button onClick={() => addShape('polygon')}>Add Polygon</button>
    </div>
  );
});

export default ControlsPanel;
