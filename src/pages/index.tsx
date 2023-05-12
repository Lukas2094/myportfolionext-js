import { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';
import * as S from '../styles/styles';

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

    <S.HeaderContainer position="static">
      <S.HeaderToolBar>
        <S.HeaderTitle variant="h6">Meu Header</S.HeaderTitle>
      </S.HeaderToolBar>
    </S.HeaderContainer>

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
