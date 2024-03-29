// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2ew29zVUVzMA97Y9ABseMT
// Component: ohWMaEJ19CUy

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button2 from "../../Button2"; // plasmic-import: em5pq9h6I4kZ/component
import { HelloWorld } from "@/src/components/hello-world"; // plasmic-import: xjWhPDKdG_Vo/codeComponent
import { TestComponent } from "@/src/components/test-component"; // plasmic-import: uCpbBf3irOog/codeComponent

import { useScreenVariants as useScreenVariantsn8YPem9Ky5 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: _N8Y_PEM9KY5/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_codegen_test.module.css"; // plasmic-import: 2ew29zVUVzMA97Y9ABseMT/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: ohWMaEJ19CUy/css

import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: -JfCsW-711Jl/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: JXK0jmgzWqwt/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: r4BIBDj6SIyo/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: Es-5lQExrotj/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: zSVwiWK321sa/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  h1?: p.Flex<"h1">;
  helloWorld?: p.Flex<typeof HelloWorld>;
  testComponent?: p.Flex<typeof TestComponent>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsn8YPem9Ky5()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"Welcome to your first page."}
            </h1>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__l8Trf
              )}
            >
              <React.Fragment>
                <React.Fragment>
                  {
                    "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial.\n\nIt's always easier to start from examples! Add a new page using a template\u2014do this from the list of pages in the top toolbar.\n\nOr press the big blue + button to start inserting items into this page.\n\nIntegrate this project into your codebase\u2014press the "
                  }
                </React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Code"}
                </span>
                <React.Fragment>
                  {
                    " button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time."
                  }
                </React.Fragment>
              </React.Fragment>
            </div>
            <div className={classNames(projectcss.all, sty.columns__mYStc)}>
              <div className={classNames(projectcss.all, sty.column___5XDCg)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__cMOaR)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/codegen_test/images/image.png",
                    fullWidth: 512,
                    fullHeight: 512,
                    aspectRatio: undefined
                  }}
                />
              </div>
              <div className={classNames(projectcss.all, sty.column__pW1A)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__gtt1G)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"100%"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  loading={"lazy"}
                  src={{
                    src: "/plasmic/codegen_test/images/image2.png",
                    fullWidth: 512,
                    fullHeight: 512,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.freeBox___9MJ2)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__odvAg)}
              >
                <div className={classNames(projectcss.all, sty.column__c4BLg)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__rSuQs)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__m4G4L)}
                      displayHeight={"40px"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"40px"}
                      src={{
                        src: "/plasmic/codegen_test/images/image3.svg",
                        fullWidth: 150,
                        fullHeight: 150,
                        aspectRatio: 1
                      }}
                    />

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__r2Oop)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5JhLo
                        )}
                      >
                        {"Connect with us"}
                      </div>
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__sr65K
                        )}
                      >
                        <IconIcon
                          className={classNames(projectcss.all, sty.svg__agQiz)}
                          role={"img"}
                        />

                        <Icon2Icon
                          className={classNames(projectcss.all, sty.svg__keHuX)}
                          role={"img"}
                        />

                        <Icon3Icon
                          className={classNames(projectcss.all, sty.svg__yS82L)}
                          role={"img"}
                        />
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>
                <div className={classNames(projectcss.all, sty.column___6Yi2L)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__oyUbv)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___4Ww7B
                      )}
                    >
                      {"Product"}
                    </div>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__uRzD
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__lvM27)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__azEzk)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__nuqWg
                        )}
                      >
                        {"Pricing"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__o90HO
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__rZ0QU)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__iGhJm)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__n0Ctl
                        )}
                      >
                        {"Log in"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__yT7Rd
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__b9MXa)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__s4JSr)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__bnxYt
                        )}
                      >
                        {"Integrations"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__zzpj3
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__onp4V)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__jKcdW)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__mFiAn
                        )}
                      >
                        {"Insights"}
                      </div>
                    </Button2>
                  </p.Stack>
                </div>
                <div className={classNames(projectcss.all, sty.column___3KoSj)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dd2B)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___796LP
                      )}
                    >
                      {"Support"}
                    </div>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__xusb
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__sOkSh)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__xuCAy)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lwPBg
                        )}
                      >
                        {"Documentation"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__hfLf0
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__boJAb)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__xjVw)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___5BeWl
                        )}
                      >
                        {"FAQs"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2___50Rkb
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__wwHov)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__b2LNh)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__jd80E
                        )}
                      >
                        {"Status"}
                      </div>
                    </Button2>
                  </p.Stack>
                </div>
                <div className={classNames(projectcss.all, sty.column__wCumx)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__qjc0P)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___6BdU6
                      )}
                    >
                      {"Company"}
                    </div>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__c7K5C
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__iNw9Q)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__oc7Ee)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__l3J
                        )}
                      >
                        {"About"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__ams6L
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__znRtU)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__hwWe)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__l8ESq
                        )}
                      >
                        {"Contact us"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__vh7T6
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(projectcss.all, sty.svg__pwp4D)}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__nph9A)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__s9Z4Z
                        )}
                      >
                        {"Careers"}
                      </div>
                    </Button2>
                    <Button2
                      className={classNames(
                        "__wab_instance",
                        sty.button2__rVfdz
                      )}
                      color={"clear"}
                      endIcon={
                        <Icon38Icon
                          className={classNames(
                            projectcss.all,
                            sty.svg___7Jrbm
                          )}
                          role={"img"}
                        />
                      }
                      size={"minimal"}
                      startIcon={
                        <ChecksvgIcon
                          className={classNames(projectcss.all, sty.svg__pgNbg)}
                          role={"img"}
                        />
                      }
                      submitsForm={true}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lLz0X
                        )}
                      >
                        {"Media"}
                      </div>
                    </Button2>
                  </p.Stack>
                </div>
              </p.Stack>
            </div>
            <HelloWorld
              data-plasmic-name={"helloWorld"}
              data-plasmic-override={overrides.helloWorld}
              className={classNames("__wab_instance", sty.helloWorld)}
            />

            <div className={classNames(projectcss.all, sty.columns__lX0Nt)}>
              <div className={classNames(projectcss.all, sty.column__uYvwz)}>
                <Button2
                  className={classNames("__wab_instance", sty.button2___0JFic)}
                  onClick={async event => {
                    const $steps = {};

                    $steps["goToNewPage"] = true
                      ? (() => {
                          const actionArgs = { destination: `/new-page` };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToNewPage"] != null &&
                      typeof $steps["goToNewPage"] === "object" &&
                      typeof $steps["goToNewPage"].then === "function"
                    ) {
                      $steps["goToNewPage"] = await $steps["goToNewPage"];
                    }
                  }}
                />
              </div>
              <div
                className={classNames(projectcss.all, sty.column___7DRd6)}
                onClick={async event => {
                  const $steps = {};

                  $steps["goToNewPage2"] = true
                    ? (() => {
                        const actionArgs = { destination: `/new-page-2` };
                        return (({ destination }) => {
                          if (
                            typeof destination === "string" &&
                            destination.startsWith("#")
                          ) {
                            document
                              .getElementById(destination.substr(1))
                              .scrollIntoView({ behavior: "smooth" });
                          } else {
                            __nextRouter?.push(destination);
                          }
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["goToNewPage2"] != null &&
                    typeof $steps["goToNewPage2"] === "object" &&
                    typeof $steps["goToNewPage2"].then === "function"
                  ) {
                    $steps["goToNewPage2"] = await $steps["goToNewPage2"];
                  }
                }}
              >
                <Button2
                  className={classNames("__wab_instance", sty.button2__jyvsq)}
                />
              </div>
            </div>
          </section>
          <TestComponent
            data-plasmic-name={"testComponent"}
            data-plasmic-override={overrides.testComponent}
            className={classNames("__wab_instance", sty.testComponent)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "h1", "helloWorld", "testComponent"],
  section: ["section", "h1", "helloWorld"],
  h1: ["h1"],
  helloWorld: ["helloWorld"],
  testComponent: ["testComponent"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  h1: "h1";
  helloWorld: typeof HelloWorld;
  testComponent: typeof TestComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    helloWorld: makeNodeComponent("helloWorld"),
    testComponent: makeNodeComponent("testComponent"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
