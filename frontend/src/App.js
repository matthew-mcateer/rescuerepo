import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import Layout from './pages/Layout';
import Rescue from './pages/Rescue';
import Loading from './pages/Loading';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout component={Index} />
          } />
          <Route path="/rescue" element={
            <Layout component={Rescue} />
          } />
          <Route path="/loading" element={
            <Layout component={Loading} />
          } />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
