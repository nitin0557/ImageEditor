import styled from "@emotion/styled";


export const SearchPageContainer = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  text-align: center;
  background-color: #f4f4f9;
  min-height: 100vh;
`;

export const SearchBox = styled.div`
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SearchInput = styled.input`
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
`;

export const SearchButton = styled.button`
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
`;

export const ImageGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  .image-card{
    width: 22%;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;