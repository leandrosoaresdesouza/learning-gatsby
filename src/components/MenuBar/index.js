import React from "react"

import { Home, Grid } from "@styled-icons/boxicons-solid"
import {
  SearchAlt2 as Search,
  UpArrowAlt as Arrow,
} from "styled-icons/boxicons-regular"
import { Lightbulb as Light } from "styled-icons/fa-regular"

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem,
} from "./styles"

export default function MenuBar() {
  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink to="/" title="Voltar para Home">
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/search/" title="Pesquisar">
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>
      <MenuBarGroup>
        <MenuBarItem title="Mudar o tema">
          <Light />
        </MenuBarItem>
        <MenuBarItem title="Mudar visualização">
          <Grid />
        </MenuBarItem>
        <MenuBarItem title="Ir para o Topo">
          <Arrow />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  )
}
