import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    acad,
    dx
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Applications
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Applications I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={acad} title="html" alt="" />
        <img src={dx} title="html" alt="" />
      </section>
    </main>
  );
}

export default Technologies;
