import { useState } from "react";
import { createContext } from "react";

const DetailPage = createContext({
  showDetailpage: { projectDetail: [], show: false },
  showDetailPageHandler: () => {},
  showBar: false,
});

export const DetailPageProvider = ({ children }) => {
  const [showDetailpage, setShowDetailPage] = useState({
    projectDetail: [],
    show: false,
  });
  const [showBar, setShowBar] = useState(false);

  const showDetailPageHandler = (project) => {
    setShowDetailPage({ projectDetail: project, show: true });
  };

  const showBarHandler = () => {
    setShowBar(true);
  };

  const cancelBarHandler = () => {
    setShowBar(false);
  };

  return (
    <DetailPage.Provider
      value={{
        showDetailpage: showDetailpage,
        showDetailPageHandler: showDetailPageHandler,
        setShowDetailPage: setShowDetailPage,
        showBar: showBar,
        showBarHandler: showBarHandler,
        cancelBarHandler: cancelBarHandler,
      }}
    >
      {children}
    </DetailPage.Provider>
  );
};

export default DetailPage;
