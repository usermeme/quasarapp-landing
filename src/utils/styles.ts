import { isArray } from "lodash";

import { Nullish } from "@/types/helpers";

const createSingleClassesBuilder =
  <
    Constants extends Readonly<Array<string | number>>,
    Prefix extends string,
    Styles extends Readonly<Record<ClassName<Prefix, Constants>, string>>,
    Value extends Constants[number]
  >(
    styles: Styles,
    prefix: Prefix,
    constants: Constants
  ): ClassesBuilder<Value> =>
  (values) =>
    constants.reduce<Record<string, boolean>>((classes, constant) => {
      const arrayValues = isArray(values) ? values : [values];

      const name: ClassName<Prefix, Constants> = `${prefix}_${constant}`;
      const className: string = styles[name];

      classes[className] = arrayValues.includes(
        constant as (typeof arrayValues)[number]
      );

      return classes;
    }, {});

export const createClassesBuilder = <
  ClassesMap extends { readonly [x: string]: ReadonlyArray<string | number> },
  Styles extends Readonly<Record<GetClassesUnion<ClassesMap>, string>>,
  Prefix extends keyof ClassesMap
>(
  styles: Styles,
  classesMap: ClassesMap
) =>
  Object.entries(classesMap).reduce((cur, [prefix, constants]) => {
    cur[prefix as Prefix] = createSingleClassesBuilder(
      styles,
      prefix,
      constants
    );
    return cur;
  }, {} as ClassesBuilderRecord<ClassesMap>);

/** Type annotations */
type ClassName<
  P extends string,
  C extends Readonly<Array<string | number>>
> = `${P}_${C[number]}`;

type GetClassesUnion<
  M extends { readonly [x: string]: Readonly<Array<string | number>> }
> = {
  [K in keyof M]: K extends string ? ClassName<K, M[K]> : never;
}[keyof M];

type ClassesBuilder<Value> = (
  values?: Nullish<Value> | Array<Nullish<Value>>
) => Record<string, boolean>;

type ClassesBuilderRecord<
  ClassesMap extends { readonly [x: string]: ReadonlyArray<string | number> }
> = {
  [P in keyof ClassesMap]: ClassesBuilder<ClassesMap[P][number]>;
};
