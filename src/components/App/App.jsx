import { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";
// import { DataPointList } from "../DataPointList";

import { StyledButton,
  TailwindButton,
  ConditionalButton } from "./App.styles.tw";

export const GET_DATA_POINTS = gql`
  query DataPoints {
    dataPoints {
      id
      value
      timestamp
    }
  }
`;



const App = () => {
  const [getDataPoints, { called, loading, error, data }] = useLazyQuery(
    GET_DATA_POINTS
  );

  useEffect(() => {
    getDataPoints();
  }, []);

  // if ((called && loading) || !data) {
  //   return <PageLayout />;
  // }

  // if (error) {
  //   console.log(error);
  //   return (
  //     <PageLayout>
  //       {/* <Message type="error">There was an error. Check the console.</Message> */}
  //     </PageLayout>
  //   );
  // }

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    <StyledButton>In Style</StyledButton>
    <br />
    <TailwindButton>In Tailwind Style</TailwindButton>
    <br />
    <ConditionalButton isRed={true}>Conditional Tailwind</ConditionalButton>
  </main>
  );
};

export default App;
