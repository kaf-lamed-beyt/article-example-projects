import React from "react";
import Head from "next/head";
import UserTable from "../../../src/container/table";

export default function ReactTableDemo() {
  return (
    <React.Fragment>
      <Head>
        <title>Table Demo</title>
      </Head>
      <UserTable />
    </React.Fragment>
  );
}
