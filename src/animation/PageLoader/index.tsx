"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import { usePageCycle } from "@/animation/contexts/PageCycleProvider";
import { Container } from "@Components/Container";
import { useSignalEffect } from "@preact/signals-react";
import { useAssets } from "../contexts/AssetsProvider";
import s from "./styles.module.scss";

function PageLoader() {
  const refLine = useRef<HTMLDivElement>(null);
  const refLineWrap = useRef<HTMLDivElement>(null);
  const pageLoadRef = useRef<HTMLDivElement>(null);
  const { assetsLoaded, assetsProgress } = useAssets();
  const { pageEntered, pageEntering } = usePageCycle();

  useSignalEffect(() => {
    if (!refLine.current || !refLineWrap.current || !pageLoadRef.current)
      return;
    console.log("assetsProgress", assetsProgress.value);
    if (assetsProgress.value === 100) {
      refLine.current.style.width = `${assetsProgress.value}%`;
      const tl = gsap.timeline({
        onComplete: pageEntered,
      });
      tl.to(refLineWrap.current, {
        opacity: 0,
        duration: 1,
        ease: "power3.in",
      })
        .to(pageLoadRef.current, {
          yPercent: -100,
          duration: 0.5,
          delay: 0.5,
          ease: "power3.out",
        })
        .to(pageLoadRef.current, {
          display: "none",
        });
      return;
    }
    const timeout = setTimeout(function () {
      if (!refLine.current) return;
      refLine.current.style.width = `${assetsProgress.value}%`;
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  });

  useGSAP(() => {
    // const tl = gsap.timeline({
    //   onComplete: pageEntered,
    //   onUpdate: pageEntering,
    // });
    // tl.to(refLine.current, {
    //   width: '100%',
    //   ease: 'power3.in',
    //   duration: 4,
    // })
    //   .to(refLineWrap.current, {
    //     opacity: 0,
    //     duration: 1,
    //     ease: 'power3.in',
    //   })
    //   .to(pageLoadRef.current, {
    //     yPercent: -100,
    //     duration: 0.5,
    //     delay: 0.5,
    //     ease: 'power3.out',
    //   })
    //   .to(pageLoadRef.current, {
    //     display: 'none',
    //   });
  });

  return (
    <div className={s.pageLoader} ref={pageLoadRef}>
      <div className={s.pageLoader_process}>
        <Container>
          <div className={s.pageLoader_spinner}>
            <div className={s.spinner}>
              <div className={s.pageLoader_process_wrap} ref={refLineWrap}>
                <div className={s.pageLoader_process_wrap_line}></div>
                <div
                  className={s.pageLoader_process_wrap_line_after}
                  ref={refLine}
                ></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default PageLoader;
