import * as React from "react"
import {
  ChakraProvider, extendTheme,
} from "@chakra-ui/react"
import customTheme from "./utils/theme/customTheme"
import Dashboard from "./views/dashboard"
const theme = extendTheme(
  customTheme
)
export const App = () => (
  <ChakraProvider theme={theme}>
   <Dashboard/>
  </ChakraProvider>
)
