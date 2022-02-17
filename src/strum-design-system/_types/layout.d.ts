type LayoutColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';

type ColumnsBreakpoints = {
  [breakpoint in Breakpoints]?: LayoutColumns;
};
