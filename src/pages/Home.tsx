import styled from 'styled-components'
import { Container, Typography, Button, Box } from '@mui/material'

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
`

const StyledBox = styled(Box)`
  margin-top: 2rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: #f5f5f5;
`

export const Home = () => {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Your App
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        React Router + MaterialUI + Styled-Components Setup Complete
      </Typography>
      <StyledBox>
        <Typography variant="body1" paragraph>
          This project is now configured with:
        </Typography>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>React Router for navigation</li>
          <li>Material-UI for components</li>
          <li>Styled-Components for custom styling</li>
          <li>TypeScript for type safety</li>
        </ul>
      </StyledBox>
    </StyledContainer>
  )
}
