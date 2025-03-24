"use strict";(self.webpackChunkimage_editor=self.webpackChunkimage_editor||[]).push([[541],{541:(e,r,a)=>{a.r(r),a.d(r,{default:()=>g});var t=a(43),i=a(213),s=a(475),n=a(323);const o=n.A.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  text-align: center;
  background-color: #f4f4f9;
  min-height: 100vh;
`,c=n.A.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,d=n.A.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,l=n.A.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`,p=n.A.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  .image-card{
    width: 22%;
  }
`,u=n.A.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;var h=a(579);const x=t.memo((e=>{let{images:r}=e;return(0,h.jsx)(p,{children:r.map((e=>{let{id:r,urls:a,alt_description:t}=e;return(0,h.jsxs)("div",{className:"image-card",children:[(0,h.jsx)(u,{src:a.small,alt:t||"Image from Unsplash",loading:"lazy"}),(0,h.jsx)(s.N_,{to:`/add-caption/${r}`,children:(0,h.jsx)(l,{children:"Add Caption"})})]},r)}))})})),m=()=>(0,h.jsxs)("div",{className:"header",children:[(0,h.jsx)("h1",{children:"Image Editor"}),(0,h.jsx)("p",{children:"Name: Nitin Kumar Singh"}),(0,h.jsx)("p",{children:"Email: nitinkrsingh789@gmail.com"})]}),g=()=>{const[e,r]=(0,t.useState)(""),[a,s]=(0,t.useState)([]);(0,t.useEffect)((()=>{const r=setTimeout((()=>{e&&n(e)}),500);return()=>clearTimeout(r)}),[e]);const n=async e=>{try{const r=await i.A.get(`https://api.unsplash.com/search/photos?query=${e}&client_id=7To0Rjwsuimo3buWJmlk8l5ju-e3x3K1EuM4TdeZnQk`);s(r.data.results)}catch(r){console.error("Error fetching images:",r)}};return(0,h.jsxs)(o,{children:[(0,h.jsx)(m,{}),(0,h.jsxs)(c,{children:[(0,h.jsx)(d,{type:"text",placeholder:"Enter your search term",value:e,onChange:e=>r(e.target.value)}),(0,h.jsx)(l,{onClick:()=>n(e),children:"Search"})]}),(0,h.jsx)(x,{images:a})]})}}}]);
//# sourceMappingURL=541.72d1cfff.chunk.js.map