import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Image } from "react-bootstrap";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Navbar
        className="shadow p-3 mb-5 bg-white rounded"
        bg="light"
        data-bs-theme="light"
      >
        <Container>
          <Navbar.Brand>
            <Link className="header" to="/">
              <span className="text-success fs-3 fw-bold">
                Concern Worldwide Bangladesh
              </span>
              &nbsp;&nbsp;
            </Link>
            <p className="text-success fw-bold">Cox's Bazar Programme - 
              <span className="text-info"> Staff Information</span></p>
            <span className="ml-5">
              {user?.displayName && (
                <span>
                  Welcome, &nbsp;
                  {user?.photoURL ? (
                    <Image
                      style={{ height: "30px", width: "30px" }}
                      roundedCircle
                      src={user.photoURL}
                    ></Image>
                  ) : (
                    <FaUser></FaUser>
                  )}
                  &nbsp;
                  {user.displayName}
                </span>
              )}
            </span>
          </Navbar.Brand>
          <Nav className="header">
            <Link to="/">All Staff</Link>
            <Link href="/about">About</Link>
            <Link href="/others">Others</Link>
            {user?.email ? (
              <button className="me-2" onClick={handleLogOut}>
                Log Out
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <Link className="" to="/register">
              Register
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
