import { useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { useAddress, useMarketplace } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'

import TopNavbarLayout from '../../../layouts/TopNavbarLayout.js'
import NFTImage from '../../../components/NFTDetails/NFTImage'
import NFTSalesInfo from '../../../components/NFTDetails/NFTSalesInfo'
//import NFTDetails from '../../../components/NFTDetails/NFTDetails'

const style = {
  wrapper:`h-[100vh] mx-auto flex max-w-2xl flex-col space-y-4 py-4 dark:bg-[#202226] lg:max-w-none lg:py-8 lg:px-24`,
  nftContainer:`flex flex-col lg:flex-row lg:space-x-4`,
  leftContainer:`flex flex-col space-y-4`,
  rightContainer:`flex flex-1 flex-col space-y-4`,
  buyoutContainer:`flex-1`,
}



const NFT = () => {

  const[listing, setListing] = useState()
  const[loading, setLoading] = useState(false)
  const router = useRouter()
  const {tokenID} = router.query
  

const marketplace = useMarketplace('0x9e6DFdec8769AebF93CE0417286a66ad298b6BAe')

const address = useAddress()


useEffect(() => {
  getListing()
},[])

useEffect(() => {
  if(!address) router.replace('/')
},[address])

const getListing = async () => {
  try {
    setLoading(true)
    const listing = await marketplace.getListing(BigNumber.from(tokenID))
    
    setListing(listing)
    setLoading(false)
  }
  catch (error) {
    console.log(error)
  }
  
} 

const buyNFT = async () => {
  try {
    await marketplace.buyoutListing(tokenID, 1)
  } catch (error) {
    console.log(error)
  }
}
  
  return (
    <TopNavbarLayout>
      <div className = {style.wrapper}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className = {style.nftContainer}>
            <div className = {style.leftContainer}>
              <div className = {style.leftElement}>
                 <NFTImage image = {listing?.asset?.image}/>
                </div>
              <div className = {style.leftElement}>
                {/*<NFT DETAILS/>*/}     
              </div>
            </div>

            <div className = {style.rightContainer}>
              {/* <NFTBasicInfo /> */}
              
              <div className = {style.buyoutContainer}>
                <NFTSalesInfo price = {listing?.buyoutCurrencyValuePerToken?.displayValue} buyNFT = {buyNFT}/>
              </div> 
            </div>
          </div>
          
          
        )}
      </div>
    </TopNavbarLayout>
  )
}

export default NFT