'use client';

import { Container } from '@Components/Container';
import ImagePlaceHolder from '@Components/ImagePlaceHolder';
import React, { useEffect } from 'react';
import s from './styles.module.scss';

function HomePage(): React.ReactElement {
  const refParagraph = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(refParagraph.current);
  }, []);

  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.wrapper_inner}>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                'https://images.unsplash.com/photo-1726064855757-ac8720008fe0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'unsplash'}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                'https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'unsplash'}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                'https://images.unsplash.com/photo-1646444254678-b937f153b221?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'unsplash'}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                'https://images.unsplash.com/photo-1662906551190-8cb78688bf87?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'unsplash'}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                'https://images.unsplash.com/photo-1507476691696-10da4222fb71?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'unsplash'}
              width={500}
              height={500}
            />
          </div>
          <div className={s.wrapper_inner_image}>
            <ImagePlaceHolder
              src={
                'https://images.unsplash.com/photo-1642322610539-2816c111ad24?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt={'unsplash'}
              width={500}
              height={500}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
