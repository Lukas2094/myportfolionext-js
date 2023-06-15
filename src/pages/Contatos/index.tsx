import React from 'react';
import * as S from '../../styles/pageContatos'
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Divider } from '../../components/Divider';
import {Redes} from '../../components/RedesSociais';

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

export default Contatos;