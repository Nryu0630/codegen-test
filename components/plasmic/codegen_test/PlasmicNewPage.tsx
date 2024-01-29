// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2ew29zVUVzMA97Y9ABseMT
// Component: FjW2-b9kQnJx

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

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
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { TestProps } from "@/src/components/test-props"; // plasmic-import: dv2fLawoSv-W/codeComponent
import { TestComponent } from "@/src/components/test-component"; // plasmic-import: uCpbBf3irOog/codeComponent
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_codegen_test.module.css"; // plasmic-import: 2ew29zVUVzMA97Y9ABseMT/projectcss
import sty from "./PlasmicNewPage.module.css"; // plasmic-import: FjW2-b9kQnJx/css

createPlasmicElementProxy;

export type PlasmicNewPage__VariantMembers = {};
export type PlasmicNewPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage__VariantsArgs;
export const PlasmicNewPage__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage__ArgsType;
export const PlasmicNewPage__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage__OverridesType = {
  root?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  table?: p.Flex<typeof RichTable>;
};

export interface DefaultNewPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage__RenderFunc(props: {
  variants: PlasmicNewPage__VariantsArgs;
  args: PlasmicNewPage__ArgsType;
  overrides: PlasmicNewPage__OverridesType;
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

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: p.generateOnMutateForSpec(
          "selectedRowKeys",
          RichTable_Helpers
        )
      },
      {
        path: "total",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    petientList: usePlasmicDataOp(() => {
      return {
        sourceId: "niYWLWUiWpxx2Je5CbYyX1",
        opId: "03742d18-ccd8-47f9-b845-0598b08fb248",
        userArgs: {},
        cacheKey: `plasmic.$.03742d18-ccd8-47f9-b845-0598b08fb248.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    }),
    query4: usePlasmicDataOp(() => {
      return {
        sourceId: "6ZqM26CnnhvkEVbUKkKiH3",
        opId: "2260e550-0004-4a54-834c-22007495f877",
        userArgs: {},
        cacheKey: `plasmic.$.2260e550-0004-4a54-834c-22007495f877.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

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
            {"Page 1"}
          </h1>
          {(() => {
            const child$Props = {
              canSelectRows: "none",
              className: classNames("__wab_instance", sty.table),
              data: (() => {
                try {
                  return $queries.query4.data.response.results[0].data;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return (() => {
                      try {
                        return $queries.query4;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return undefined;
                        }
                        throw e;
                      }
                    })();
                  }
                  throw e;
                }
              })(),
              fields: (() => {
                try {
                  return undefined;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return (() => {
                      const __composite = [
                        {
                          key: "response",
                          fieldId: "response",
                          isHidden: null
                        },
                        {
                          key: "statusCode",
                          fieldId: "statusCode",
                          isHidden: null
                        },
                        { key: "headers", fieldId: "headers", isHidden: null },
                        { key: "id", fieldId: "id" },
                        {
                          key: "in_hospital_date",
                          fieldId: "in_hospital_date"
                        },
                        {
                          key: "out_hospital_date",
                          fieldId: "out_hospital_date"
                        },
                        { key: "add_time", fieldId: "add_time" },
                        { key: "healGroup", fieldId: "healGroup", expr: null },
                        { key: "therapist", fieldId: "therapist" },
                        { key: "followInfo", fieldId: "followInfo" },
                        { key: "inspectInfo", fieldId: "inspectInfo" },
                        { key: "checkInfo", fieldId: "checkInfo" },
                        { key: "moNum", fieldId: "moNum" },
                        { key: "moFinishNum", fieldId: "moFinishNum" },
                        { key: "moNoFinishNum", fieldId: "moNoFinishNum" },
                        { key: "isBackNum", fieldId: "isBackNum" },
                        { key: "totalCharge", fieldId: "totalCharge" },
                        { key: "totalBackCharge", fieldId: "totalBackCharge" },
                        { key: "warnIdList", fieldId: "warnIdList" },
                        { key: "level", fieldId: "level" },
                        { key: "arrangeStatus", fieldId: "arrangeStatus" },
                        {
                          key: "military_tem_info",
                          fieldId: "military_tem_info"
                        },
                        { key: "birthday_age", fieldId: "birthday_age" },
                        { key: "diagnosis", fieldId: "diagnosis" },
                        { key: "age", fieldId: "age" },
                        { key: "hospitalId", fieldId: "hospitalId" },
                        { key: "name", fieldId: "name" },
                        { key: "phone", fieldId: "phone" },
                        { key: "oldPhone", fieldId: "oldPhone" },
                        { key: "sex", fieldId: "sex" },
                        { key: "visit_no", fieldId: "visit_no" },
                        { key: "id_no", fieldId: "id_no" },
                        { key: "admission_no", fieldId: "admission_no" },
                        { key: "bed_no", fieldId: "bed_no" },
                        { key: "type", fieldId: "type" },
                        { key: "pay_type", fieldId: "pay_type" },
                        { key: "dangerLevel", fieldId: "dangerLevel" },
                        { key: "remark", fieldId: "remark" },
                        { key: "diagnosisId", fieldId: "diagnosisId" },
                        { key: "department", fieldId: "department" },
                        { key: "doctor", fieldId: "doctor" },
                        { key: "therapistId", fieldId: "therapistId" },
                        { key: "status", fieldId: "status" },
                        { key: "hasChecked", fieldId: "hasChecked" },
                        { key: "charge", fieldId: "charge" },
                        { key: "operationDate", fieldId: "operationDate" },
                        { key: "birthday", fieldId: "birthday" },
                        { key: "index", fieldId: "index" },
                        { key: "update_time", fieldId: "update_time" },
                        { key: "leave_hospital", fieldId: "leave_hospital" },
                        { key: "useStatus", fieldId: "useStatus" },
                        { key: "isTest", fieldId: "isTest" },
                        { key: "loginStatus", fieldId: "loginStatus" },
                        {
                          key: "preLeaveHospitalStatus",
                          fieldId: "preLeaveHospitalStatus"
                        },
                        {
                          key: "checkPreLeaveHospitalStatus",
                          fieldId: "checkPreLeaveHospitalStatus"
                        },
                        { key: "delete", fieldId: "delete" },
                        {
                          key: "discharge_checkout",
                          fieldId: "discharge_checkout",
                          isHidden: null
                        },
                        { key: "referral_status", fieldId: "referral_status" },
                        { key: "stage", fieldId: "stage" },
                        { key: "referral_info", fieldId: "referral_info" },
                        { key: "addUserId", fieldId: "addUserId" }
                      ];
                      __composite["0"]["isHidden"] = true;
                      __composite["1"]["isHidden"] = true;
                      __composite["2"]["isHidden"] = true;
                      __composite["7"]["expr"] = (
                        currentItem,
                        currentValue
                      ) => {
                        return (() => {
                          let tmp = [];
                          if (currentValue && currentValue.length) {
                            currentValue.forEach(v => {
                              tmp.push(v.name);
                            });
                            return tmp.join(",");
                          }
                        })();
                      };
                      __composite["56"]["isHidden"] = true;
                      return __composite;
                    })();
                  }
                  throw e;
                }
              })(),
              hideExports: false,
              hideSearch: false,
              onRowSelectionChanged: async (...eventArgs: any) => {
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRowKey",
                  ["table", "selectedRowKey"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRow",
                  ["table", "selectedRow"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRows",
                  ["table", "selectedRows"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
                p.generateStateOnChangePropForCodeComponents(
                  $state,
                  "selectedRowKeys",
                  ["table", "selectedRowKeys"],
                  RichTable_Helpers
                ).apply(null, eventArgs);
              },
              scopeClassName: sty["table__instance"],
              selectedRowKey: p.generateStateValueProp($state, [
                "table",
                "selectedRowKey"
              ]),
              selectedRowKeys: p.generateStateValueProp($state, [
                "table",
                "selectedRowKeys"
              ]),
              themeResetClassName: classNames(
                projectcss.root_reset,
                projectcss.root_reset_tags,
                projectcss.plasmic_default_styles,
                projectcss.plasmic_mixins,
                projectcss.plasmic_tokens,
                plasmic_antd_5_hostless_css.plasmic_tokens,
                plasmic_plasmic_rich_components_css.plasmic_tokens
              )
            };
            p.initializeCodeComponentStates(
              $state,
              [
                {
                  name: "selectedRowKey",
                  plasmicStateName: "table.selectedRowKey"
                },
                {
                  name: "selectedRow",
                  plasmicStateName: "table.selectedRow"
                },
                {
                  name: "selectedRows",
                  plasmicStateName: "table.selectedRows"
                },
                {
                  name: "selectedRowKeys",
                  plasmicStateName: "table.selectedRowKeys"
                }
              ],
              [],
              RichTable_Helpers ?? {},
              child$Props
            );

            return (
              <RichTable
                data-plasmic-name={"table"}
                data-plasmic-override={overrides.table}
                {...child$Props}
              />
            );
          })()}
          <TestProps
            className={classNames("__wab_instance", sty.testProps__jFhG)}
            tip={"test tips"}
          >
            <TestComponent
              className={classNames("__wab_instance", sty.testComponent__hciK7)}
            />
          </TestProps>
          <TestProps
            className={classNames("__wab_instance", sty.testProps__cdA8)}
            tip={"123"}
          >
            <TestComponent
              className={classNames(
                "__wab_instance",
                sty.testComponent___7D6Lv
              )}
            />

            <TestComponent
              className={classNames("__wab_instance", sty.testComponent__nW7QF)}
            />
          </TestProps>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "h1", "table"],
  h1: ["h1"],
  table: ["table"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  h1: "h1";
  table: typeof RichTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage__VariantsArgs;
    args?: PlasmicNewPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage__ArgsType,
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
          internalArgPropNames: PlasmicNewPage__ArgProps,
          internalVariantPropNames: PlasmicNewPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage";
  } else {
    func.displayName = `PlasmicNewPage.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage = Object.assign(
  // Top-level PlasmicNewPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    table: makeNodeComponent("table"),

    // Metadata about props expected for PlasmicNewPage
    internalVariantProps: PlasmicNewPage__VariantProps,
    internalArgProps: PlasmicNewPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage;
/* prettier-ignore-end */
