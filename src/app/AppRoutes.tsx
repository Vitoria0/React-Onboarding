import { useSelector } from "react-redux";
import Layout from "../layout/layout";
import Home from "../pages/Homepage/Homepage";
import IntroModuloUm from "../pages/IntroModuloUm/IntroModuloUm";
import Introducao01 from "../pages/Introducao01/Introducao01";
import Introducao02 from "../pages/Introducao02/Introducao02";
import Module01Page01 from "../pages/Module01Page01/Module01Page01";
import Module01Page02 from "../pages/Module01Page02/Module01Page02";
import Module01Page03 from "../pages/Module01Page03/Module01Page03";
import Module01Page04 from "../pages/Module01Page04/Module01Page04";
import { selectUserData } from "../features/user/userDataSlice";

export const AppRoutes = () => {
  const blockVideo = useSelector(selectUserData)?.blockVideo;
  return (
    <Layout>
      <Home />
      {blockVideo && blockVideo[0] && (
        <>
          <Introducao01 />
          <Introducao02 />
          <IntroModuloUm />
          <Module01Page01 />
          {blockVideo[1] && (
            <>
              <Module01Page02 />
              <Module01Page03 />
              <Module01Page04 />
            </>
          )}
        </>
      )}
    </Layout>
  );
};
