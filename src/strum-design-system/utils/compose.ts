import { AtomsFnBase } from '../components/Box/types';
import { atoms, Atoms } from '../sprinkles.css';

type Style = string | number;

export function composeStyles(...classNames: Array<Style>) {
  const classes = classNames
    .filter((className) => {
      return Boolean(className) && className !== ' ';
    })
    .map((className) => {
      return className?.toString().trim();
    }) as Array<string>;
  return classes.length === 0 ? undefined : classes.join(' ');
}

export const composeWithAtoms = (
  atomicProperties: Atoms,
  ...args: Array<Style>
): string => {
  if (!atomicProperties) return composeStyles(...args);

  return composeStyles(...args, atoms(atomicProperties));
};

export const compose =
  (...functions) =>
  (args) =>
    functions.reduceRight((arg, fn) => fn(arg), args);

export function extractAtomsFromProps<AtomsFn extends AtomsFnBase>(
  props: any,
  atomsFn: AtomsFn,
) {
  let hasAtomProps = false;
  let atomProps: Record<string, unknown> = {};
  let otherProps: Record<string, unknown> = {};

  for (const key in props) {
    if (atomsFn.properties.has(key)) {
      hasAtomProps = true;
      atomProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  }

  return { hasAtomProps, atomProps, otherProps };
}
