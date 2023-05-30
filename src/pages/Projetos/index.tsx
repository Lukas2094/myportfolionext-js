import React from 'react';
import * as S from '../../styles/pageProjects';
import { GetServerSideProps, NextPage } from 'next';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Divider } from '../../components/Divider';
import { Cards } from '../../components/CardsRepo';
import axios from 'axios';

type Repository = {
    id: number;
    name: string;
    description: string;
    language: string;
    html_url: string;
  };
  
  type Props = {
    repositories: Repository[];
  };

const Projetos: NextPage<Props> = ({repositories}) => {

    return (
       <>
        <Header />
          <Divider />
            <S.Containers>
              <Cards repo={repositories} /> 
            </S.Containers>
          <Divider />
        <Footer />
       </>

    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/Lukas2094/repos');
      
      const repositories: Repository[] = response.data.map((repository: any) => ({
        id: repository.id,
        name: repository.name,
        description: repository.description,
        language: repository.language,
        html_url: repository.html_url,
      }));
  
      return {
        props: {
          repositories,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        notFound: true,
      };
    }
  };


export default Projetos;
