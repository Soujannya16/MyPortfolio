import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import { Chat } from '../components/ChatWindow/Chat'

export const Layout = ({children}) => (
  <Container>
    <Header />
    <main>{children}</main>
    <Chat />
    <Footer />
  </Container>
)
