import React from "react";
import { Cover } from "@/components/ui/cover";

const Preui = () => {
  return (
    <div className="h-full w-full">
      <h1
        className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-12 relative
     z-20 py-1 pt-15 items-center flex flex-col justify-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
      >
        Prepare smarter, faster, and more efficiently with{" "}
        <Cover>Mockster's lightning-fast AI.</Cover>
      </h1>
    </div>
  );
};

export default Preui;
