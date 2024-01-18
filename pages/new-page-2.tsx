// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";

import { ScreenVariantProvider } from "../components/plasmic/codegen_test/PlasmicGlobalVariant__Screen";
import { PlasmicNewPage2 } from "../components/plasmic/codegen_test/PlasmicNewPage2";
import { useRouter } from "next/router";

function NewPage2() {
  // Use PlasmicNewPage2 to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicNewPage2 are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicNewPage2 is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <ph.PageParamsProvider
      route={useRouter()?.pathname}
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicNewPage2 />
    </ph.PageParamsProvider>
  );
}

export default NewPage2;
