import styled from 'styled-components';


export const StyledHeader = styled.header `
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 1rem;
        height: 5rem;
        background-color: darkred;
        color: white;
        box-shadow: 1px 1px 3px 2px #808080;
        .homenav {
                text-decoration: none;
                color: inherit;
        }
        nav {
            display: flex;
            align-items: center;
            ul {
                display: flex;
                list-style: none;
                li{
                    margin-right: 1.5rem;
                    font-size: 1.5rem;
                    font-weight: 700;
                    img {
                        height: 50px;
                        border-radius: 50%;
                    }
                    a{
                        text-decoration: none;
                        color: inherit;
                    }
                    &:last-child:hover{
                        cursor: pointer;
                    }
                }
            }
        }
    `;

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  margin: 75px;
  padding: 25px;
`;

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    height: 5rem;
    justify-content: center;
`