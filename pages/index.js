// pages/index.tsx
import React from "react";
import { GetServerSideProps } from "next";

import {
  AuthTokens,
  useAuth,
  useAuthFunctions,
  getServerSideAuth,
} from "../auth";

const Home = ({ initialAuth }) => {
  const auth = useAuth(initialAuth);
  const { login, logout } = useAuthFunctions();

  return (
    <React.Fragment>
      {auth ? (
        <button type="button" onClick={() => logout()}>
          sign out
        </button>
      ) : (
        <React.Fragment>
          <button type="button" onClick={() => login()}>
            sign in
          </button>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const getServerSideProps = (context) => {
  const initialAuth = getServerSideAuth(context.req);
  console.log("🚀 ~ file: index.js ~ line 34 ~ getServerSideProps ~ initialAuth", context)
  console.log("🚀 ~ file: index.js ~ line 34 ~ getServerSideProps ~ initialAuth", initialAuth)


  return { props: {initialAuth: initialAuth } };
};

export default Home;