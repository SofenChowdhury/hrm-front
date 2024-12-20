import React, { useState, useEffect, Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

//redux imports
import { connect } from "react-redux";

//components import
import Sidebar from "./global/Sidebar";
import Topbar from "./global/Topbar";
import Login from "../pages/login";

const Layout = ({ children, isLoggedIn, isCollapsed }) => {
  //Public routes
  const router = useRouter();
  const currentPath = router.pathname;
  const isPublicPath = currentPath.startsWith("/public");

  //Responsive
  const [width, setWidth] = useState(window.innerWidth);

  // SET WINDOW SIZE
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>HR-Management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {isPublicPath ? (
          <>
            <div className="holder-public">{children}</div>
          </>
        ) : (
          <>
            {isLoggedIn ? (
              <>
                <div className="app">
                  <Sidebar />
                  {width < 600 ? (
                    <div>
                      {isCollapsed ? (
                        <>
                          <div className="content">
                            <Topbar />
                            <div className="holder">{children}</div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="content">
                        <Topbar />
                        <div className="holder">{children}</div>
                      </div>
                    </>
                  )}
                </div>
              </>
            ) : (
              <Login />
            )}
          </>
        )}
      </>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.token,
    isCollapsed: state.collapse.isCollapse,
  };
};

export default connect(mapStateToProps)(Layout);
