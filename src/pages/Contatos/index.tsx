import React from 'react';
import * as S from '../../styles/pageContatos'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Divider } from '../../components/Divider';
import {Redes} from '../../components/RedesSociais';
import { GetStaticProps } from 'next';
const Contatos: React.FC = () => {
  return (
    <S.Containers>
      <Header />
      <Divider />
      <Divider />
      <Redes />
      <Divider />
      <Divider />
      <Footer />
    </S.Containers>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};


export default Contatos;