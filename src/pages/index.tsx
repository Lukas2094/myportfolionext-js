import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import { Header } from '../components/Header';
import { Carrousel } from '../components/Carrousel';
import { Footer } from '../components/Footer';
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
  console.log(repositories);
  
  return (
    <>
    <Header />
    <Carrousel />

    <hr style={{margin: '20px 0px'}}/>
      <div>
        {repositories.map((repository) => (
          <div key={repository.id}>
            <h2>{repository.name}</h2>
            <p>{repository.description}</p>
            <p>{repository.language}</p>
            <a href={repository.html_url}>GitHub Repository</a>
          </div>
        ))}
      </div>    
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

export default Home;
