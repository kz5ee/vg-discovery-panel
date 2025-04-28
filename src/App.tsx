import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}>
    <GridItem area="nav" bg="blue">Nav</GridItem>
    <Show above="lg">
    <GridItem area="aside" bg="yellow">Aside</GridItem>
    </Show>
    <GridItem area="main" bg="red">Main</GridItem>
  </Grid>
}

export default App
