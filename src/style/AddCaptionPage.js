import styled from "@emotion/styled";

export const CaptionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa;
  font-family: Arial, sans-serif;
  min-height: 100vh; 
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center; 
`;

export const DownloadButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
`;

export const Button = styled.button`
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
`;

export const CaptionInput = styled.input`
  padding: 10px;
  border: 2px solid #007bff;
  border-radius: 4px;
  width: 300px;
  font-size: 16px;
  margin-bottom: 10px;
  text-align: center; /* Center text inside the input */
`;

export const MainContainer = styled.div`
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
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px; /* Set consistent width for controls */
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
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
`;
