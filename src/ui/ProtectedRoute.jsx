import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //=> we are not allowed to call navigate function in the top level
  // we can call it only inside other function => (callback or useEffect)

  //1.Load the authenticated user
  const { isLoading,  isAuthenticated } = useUser();

  //3. If there is NO authenticated user, redirect to the /login
  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate("/login");
    },
    [isLoading, isAuthenticated, navigate]
  );

  //2. while loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. if there is a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
