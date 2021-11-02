import { StyledFooter } from "../styles";

const Footer = (props) => {
    return (
        <StyledFooter>
            <p>Copyright &copy; All Rights Reserverd Free-Games-Collection {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};

export default Footer;