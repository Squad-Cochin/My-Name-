//////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                      //
//                            LISTING PAGE DISPLAY THROUGH THIS COMPONENT.                              //
//                                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////


import MainModal from "./designs/MainModal/MainModal";
import Head from "next/head";
const Home = () => {
  return (
    <>
      <Head>
        <title>Moonstride</title>
        <meta
        name="description"
        content="Check out the transfer Detail Page..."
        key="desc"
        />
      </Head>
      <MainModal />
    </>
  );
};

export default Home;

