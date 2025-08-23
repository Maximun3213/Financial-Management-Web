'use client';

import { usePageCycle } from '@/animation/contexts/PageCycleProvider';

function PageTransition() {
  const { isPageEntering, isPageExiting } = usePageCycle();

  return <div>PageTransition</div>;
}

export default PageTransition;
