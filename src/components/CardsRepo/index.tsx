import React from "react";
import * as S from './styles'

type Repository = {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
};

interface Repo {
    repo: Repository[];
  };

export function Cards( { repo } : Repo) {

    function titleize(text: string) {
      var words = text.toLowerCase().split(" ");
      for (var a = 0; a < words.length; a++) {
          var w = words[a];
          words[a] = w[0].toUpperCase() + w.slice(1);
      }
      return words.join(" ");
    };

    return (
      <>
      {repo.map((item) => (
        <S.ContainCard key={item.id}>
          <S.ContentImage>
            <S.Image src={'https://media.ativo.com/adm/magento/assetsBB/LSlogo.jpg'}/>

            <S.Linguage>
                <S.Text>{item.language}</S.Text>
            </S.Linguage>
          </S.ContentImage>

          <S.ContentText>
            <S.Title>{titleize(item.name)}</S.Title>
          </S.ContentText>

          <S.ContentText>
            <S.TextDesc>
             <a href={item.html_url} target={'_blank'}> {item.description} </a>
            </S.TextDesc>
          </S.ContentText>
        </S.ContainCard>
      ))}

      </>

    )
}