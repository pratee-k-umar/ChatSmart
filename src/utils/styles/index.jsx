import styled from 'styled-components'

export const InputContainer = styled.div`
  background-color: #131313;
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`

export const InputField = styled.input`
  background: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-family: 'Inter";
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 4px 0;
`

export const InputLabel = styled.label`
  color: #8f8f8f;
  font-weight: bold;
  font-size: 14px;
`

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #0011ff;
  border: none;
  padding: 20px 16px;
  font-size: 18px;
  font-weight: bolder;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out all;
  &:hover {
    background-color: #3845ff;
  }
`

export const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
`