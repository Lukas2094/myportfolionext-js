import { GetServerSideProps, NextPage , GetStaticProps } from 'next';
import axios from 'axios';
import { Header } from '../components/Header';
import { Carrousel } from '../components/Carrousel';
import { Footer } from '../components/Footer';
import { Divider } from '../components/Divider';
import { Skills } from '../components/Skills';
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

const Home: NextPage<Props> = ({ repositories }) => {
  // console.log(repositories);
  
  return (
    <>
    <Header />
    <Carrousel />
    
    <Divider />
    <Skills />
    <Footer />
    </>

  );
};


export const getStaticProps: GetStaticProps<Props> = async () => {
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
      revalidate: 3600, // Defina o tempo em segundos para atualização automática dos dados
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};

export default Home;