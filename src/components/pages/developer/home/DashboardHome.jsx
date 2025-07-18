import React from "react";
import DashboardUpperNav from "../../../partials/DashboardUpperNav";
import DashboardSideNav from "../../../partials/DashboardSideNav";
import Hero from "./hero/Hero";
import About from "./about/About";
import Contact from "./contact/Contact";
import Testimonials from "./testimonials/Testimonials";
import Services from "./services/Services";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const DashboardHome = () => {
  const [isSideNavOpen, setIsSideNavOpen] = React.useState(true);

  return (
    <>
      <DashboardUpperNav />
      <DashboardSideNav
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      />
      <section
        className={`ml-[224px] absolute top-16 w-[calc(100dvw-224px)] h-[calc(100dvh-64px)] overflow-y-scroll transition-all ease-in-out duration-300 ${
          isSideNavOpen ? "" : "!ml-0 !w-full"
        }`}
      >
        <div className="page-container">
            <div className="content-wrap">
                <div className="container max-w-full">
                    <Header/>
                    <Hero/>
                    <About/>
                    <Services/>
                    <Testimonials/>
                    <Contact/>
                    <Footer/>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default DashboardHome;
