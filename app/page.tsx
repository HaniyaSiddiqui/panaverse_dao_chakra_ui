"use client";
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Header from './Header'
import Main from './Home'
import Footer from './Footer'

import { extendTheme } from '@chakra-ui/react'
import { keyframes } from "@chakra-ui/system";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider >
      <Box className={styles.fontFamily}>
        <Header />
        <Main />
        <Footer />
      </Box>



    </ChakraProvider>
  )
}
