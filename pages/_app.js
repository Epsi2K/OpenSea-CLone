import {ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'


function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId = {ChainId.Rinkeby}
        chainRpc={{
          [ChainId.Rinkeby]:'https://rinkeby.infura.io/v3/27fa21f024d44996b9b7e2d97d59d402'
        }}
      >
      <ThemeProvider>
         <Component {...pageProps} /> 
      </ThemeProvider>
     
    </ThirdwebProvider>
    
  )
}

export default MyApp
