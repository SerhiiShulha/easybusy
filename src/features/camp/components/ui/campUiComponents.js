import styled from '@emotion/styled'

export const Box = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 1.6rem;
  border: 1px solid #e4e4e4;
  overflow: hidden;
  padding: ${(props) => props.p || 0};
  margin: ${(props) => props.m || 0};
`
