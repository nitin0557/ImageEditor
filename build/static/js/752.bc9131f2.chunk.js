(self.webpackChunkimage_editor=self.webpackChunkimage_editor||[]).push([[752],{53:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>m});var n=i(43),a=i(216),o=i(661),r=i(213),l=i(323);const c=l.A.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
  min-height: 100vh; 
`,d=l.A.div`
  color: red;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center; 
`,s=l.A.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`,g=l.A.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.5);
  }
`,f=l.A.input`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 4px;
  width: 300px;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center; /* Center text inside the input */
`,x=l.A.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,h=l.A.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px; /* Set consistent width for controls */
  margin-bottom: 20px;
`,p=l.A.div`
  margin-right: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;var u=i(579);const m=function(){const{imageId:e}=(0,a.g)(),[t,i]=(0,n.useState)(""),[l,m]=(0,n.useState)(""),b=(0,n.useRef)(null),[w,y]=(0,n.useState)(null),[k,j]=(0,n.useState)(null);(0,n.useEffect)((()=>{e&&(async()=>{try{const t=await r.A.get(`https://api.unsplash.com/photos/${e}?client_id=7To0Rjwsuimo3buWJmlk8l5ju-e3x3K1EuM4TdeZnQk`);m(t.data.urls.regular),console.log("Image URL fetched:",t.data.urls.regular)}catch(t){j("Error fetching image. Please try again."),console.error("Error fetching image:",t)}})()}),[e]),(0,n.useEffect)((()=>{const e=new o.fabric.Canvas(b.current,{width:600,height:400,backgroundColor:"#fff"});return y(e),console.log("Canvas initialized"),()=>{e.dispose()}}),[]),(0,n.useEffect)((()=>{w&&l&&(console.log("Loading image onto canvas:",l),o.fabric.Image.fromURL(l,(e=>{e.scaleToWidth(w.width),e.scaleToHeight(w.height),w.add(e),w.sendToBack(e),w.renderAll()}),{crossOrigin:"anonymous"}))}),[w,l]);const v=e=>{let t;switch(e){case"triangle":t=new o.fabric.Triangle({width:100,height:100,fill:"blue",left:100,top:100});break;case"circle":t=new o.fabric.Circle({radius:50,fill:"red",left:100,top:100});break;case"rectangle":t=new o.fabric.Rect({width:120,height:80,fill:"green",left:100,top:100});break;case"polygon":t=new o.fabric.Polygon([{x:200,y:0},{x:250,y:50},{x:300,y:0},{x:275,y:100}],{fill:"orange",left:100,top:100});break;default:return}t.set({selectable:!0,resizable:!0}),w.add(t),w.bringToFront(t),w.renderAll()};return(0,u.jsxs)(c,{children:[k&&(0,u.jsx)(d,{children:k}),(0,u.jsxs)(x,{children:[(0,u.jsx)(p,{children:(0,u.jsx)("canvas",{ref:b,id:"canvas"})}),(0,u.jsxs)(h,{children:[(0,u.jsx)(f,{type:"text",placeholder:"Add Caption",value:t,onChange:e=>i(e.target.value)}),(0,u.jsx)(g,{onClick:()=>{if(!t.trim())return void j("Please enter a valid caption.");const e=new o.fabric.Textbox(t,{left:100,top:100,fontSize:20,fill:"black",editable:!0});e.set({selectable:!0,resizable:!0}),w.add(e),w.setActiveObject(e),w.bringToFront(e),w.renderAll()},children:"Add Caption Text"}),(0,u.jsx)(g,{onClick:()=>v("triangle"),children:"Add Triangle"}),(0,u.jsx)(g,{onClick:()=>v("circle"),children:"Add Circle"}),(0,u.jsx)(g,{onClick:()=>v("rectangle"),children:"Add Rectangle"}),(0,u.jsx)(g,{onClick:()=>v("polygon"),children:"Add Polygon"})]})]}),(0,u.jsxs)(s,{children:[(0,u.jsx)(g,{onClick:()=>{try{const e=w.toDataURL({format:"png",quality:.8}),t=document.createElement("a");t.href=e,t.download="canvas-image.png",t.click()}catch(e){j("Failed to download the image. Please try again."),console.error("Error downloading image:",e)}},children:"Download"}),(0,u.jsx)(g,{onClick:()=>{const e=w.getObjects().map((e=>({type:e.type,left:e.left,top:e.top,width:e.width||e.getScaledWidth(),height:e.height||e.getScaledHeight(),text:e.text||"",fill:e.fill||""})));console.log("Canvas Layers:",e)},children:"Log Canvas Layers"})]})]})}},246:()=>{},574:()=>{},748:()=>{}}]);
//# sourceMappingURL=752.bc9131f2.chunk.js.map