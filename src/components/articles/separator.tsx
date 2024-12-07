import { ReactNode } from 'react';

export default function Separator(): ReactNode {
  return (
    <hr className="w-full rounded-full border border-neutral-6 last-of-type:hidden" />
  );
}
