import { atoms, Atoms } from '../sprinkles.css';

type Style = string | number;

export const composeStyles = (...args: Array<Style>) => {
  const classes = [];

  args.forEach((arg) => {
    if (arg) {
      classes.push(arg);
    }
  });

  return classes.join(' ');
};

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
