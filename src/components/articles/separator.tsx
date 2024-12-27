import { ReactNode } from 'react';

export default function Separator(): ReactNode {
  return (
    <hr className="border-neutral-6 w-full rounded-full border last-of-type:hidden" />
  );
}
