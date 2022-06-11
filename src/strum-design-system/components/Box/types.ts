export type CreateBoxParams<AtomsFn> = {
  atoms: AtomsFn;
  defaultClassName?: string;
};

export interface AtomsFnBase {
  (...args: any): string;
  properties: Set<string>;
}
