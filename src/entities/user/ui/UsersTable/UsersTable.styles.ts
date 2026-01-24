import styled from 'styled-components';
import { Avatar } from 'antd';

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #fafafa;
  }
`;

export const StyledAvatar = styled(Avatar)`
  margin-right: 16px;
  flex-shrink: 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: 500;
`;

export const Meta = styled.div`
  font-size: 12px;
  color: #999;
`;
