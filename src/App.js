import "./App.css";
import { useContext, useEffect, useState } from "react";
import AboutMe from "./layouts/AboutMe";
import LandHome from "./layouts/LandHome";
import Resume from "./layouts/Resume";
import Services from "./layouts/Services";
import Skills from "./layouts/Skills";
import MyPortfolio from "./layouts/MyPortfolio";
import HireMe from "./layouts/HireMe";
import FAQ from "./layouts/FAQ";
import Testimonial from "./layouts/Testimonial";
import Footer from "./layouts/Footer";
import Copyright from "./layouts/Copyright";
import DetailProject from "./layouts/DetailProject";
import DetailPage from "./context/DetailPageProvider";

const App = () => {
  const pageContext = useContext(DetailPage);
  const { showDetailpage } = pageContext;
  const [offSet, setOffSet] = useState(0);
  const [cancelDetailClicked, setCancelDetailClicked] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (!showDetailpage.show) {
        setOffSet(window.scrollY);
      }
    };
    if (cancelDetailClicked) {
      window.scrollTo(0, offSet);
      setCancelDetailClicked(false);
    }
  }, [offSet, cancelDetailClicked, showDetailpage.show]);

  return (
    <div>
      {!showDetailpage.show && (
        <div>
          <LandHome offSet={offSet} />
          <AboutMe />
          <Services />
          <Resume />
          <Skills />
          <MyPortfolio />
          <HireMe />
          <FAQ />
          <Testimonial />
          <Footer />
          <Copyright />
        </div>
      )}
      {showDetailpage.show && (
        <DetailProject
          projectDetail={showDetailpage.projectDetail}
          setCancelDetailClicked={setCancelDetailClicked}
        />
      )}
    </div>
  );
};

export default App;
