import React from 'react';
import * as S from './styles';

export function Redes() {
    return (
        <S.Containers>
          <S.Content>

          <S.Text as={'p'}>
              <S.Email />  E-mail: <b>lukas2094@gmail.com</b>
            </S.Text>

            <S.Text as={'p'}>
               <S.Telefone /> Telefone: <b>2081-4841</b>
            </S.Text>

            <S.Text as={'p'}>
              <S.Whats />  Cel/WhatsApp: <b>11 94932-2230</b>
            </S.Text>

            <S.Text as={'p'}>
              <S.LinkdIN />  LinkedIn: <b><a href='https://br.linkedin.com/in/lucas-santos-da-silva-91133616b' target='_blank'>https://br.linkedin.com/in/lucas-santos-da-silva-91133616b</a></b>
            </S.Text>

            <S.Text as={'p'}>
              <S.GitHub />  GitHub: <b><a href='https://github.com/Lukas2094' target='_blank'>https://github.com/Lukas2094</a></b>
            </S.Text>

          </S.Content>
        </S.Containers>
    )
}