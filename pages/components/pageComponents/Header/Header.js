//////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                  //
//                 PAGE HAVING A COMPONENT OF MOONSTRIDE LOGO FOR THE HOME PAGE                     //
//                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////

import Container from "react-bootstrap/Container";
import Link from "next/link";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// IMPORT PAGES
import Logo from "../../../../public/images/moonstride-logo.svg";
import Styles from "./Header.module.scss";

// HEADER COMPONENT WITH MOONSTRIDE LOGO
const HeaderAtCenter = () => { 
  return (
    <header className={Styles.centertopbar}>
      <Container>
      <Row>
          <Col xs={12} lg={12} md={12} >
              <Link href="/"> 
                <a className={Styles.logo}>
                  {/* The logo image will be displayed here */}
                  <Image src={Logo} alt="Moonstride Logo" />
                </a>
              </Link>
          </Col> 
        </Row>
      </Container>
    </header>
    
  );
};

const HeaderAtLeft = () => { 
  return (
      <Container fluid={true} className={Styles.lefttopbar}>
      <Row>
          <Col xs={12} lg={12} md={12} >
              <Link href="/" className={Styles.logo}> 
                <a className={Styles.logo}>
                  {/* The logo image will be displayed here */}
                  <Image src={Logo} alt="Moonstride Logo" />
                </a>
              </Link>
          </Col> 
        </Row>
      </Container>
  );
};

export default HeaderAtCenter;
export { HeaderAtLeft };
