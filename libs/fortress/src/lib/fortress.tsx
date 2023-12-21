import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FortressProps {}

const StyledFortress = styled.div`
  color: pink;
`;

export function Fortress(props: FortressProps) {
  return (
    <StyledFortress>
      <h1>Welcome to Fortress!</h1>
    </StyledFortress>
  );
}

export default Fortress;
