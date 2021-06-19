import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PostCard from './components/RecentPosts/PostCard'
import Footer from './components/Footer'

export default function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <PostCard />
      <Footer />
    </ChakraProvider>
  )
}