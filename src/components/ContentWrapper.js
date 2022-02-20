import React from 'react';
import styled from 'styled-components';
import { Grid, GridColumn } from '@atlaskit/page';
import { gridSize } from '@atlaskit/theme';

const Padding = styled.div`
  margin: ${gridSize() * 4}px ${gridSize() * 8}px;
  padding-bottom: ${gridSize() * 3}px;
`;


export default ({ children }) => (
  <Grid layout="fluid" spacing="comfortable">
    <GridColumn>
      <Padding>{children}</Padding>
    </GridColumn>
  </Grid>
)