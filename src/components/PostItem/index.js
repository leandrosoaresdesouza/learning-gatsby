import React from "react"

import {
  PostItemLink,
  PostItemWrapper,
  PostItemTag,
  PostItemInfo,
  PostItemDate,
  PostItemTitle,
  PostItemDescription,
} from "./styles"

export default function PostItem() {
  return (
    <PostItemLink to="/slug/">
      <PostItemWrapper>
        <PostItemTag background="#47650b">MISC</PostItemTag>
        <PostItemInfo>
          <PostItemDate>02 de Setembro de 2020 - 4min de leitura</PostItemDate>
          <PostItemTitle>
            Diga não ao Medium: tenha sua própria plataforma
          </PostItemTitle>
          <PostItemDescription>
            Algumas razões para você ter sua própria plataforma ao invés de
            soluções como o Medium.
          </PostItemDescription>
        </PostItemInfo>
      </PostItemWrapper>
    </PostItemLink>
  )
}
