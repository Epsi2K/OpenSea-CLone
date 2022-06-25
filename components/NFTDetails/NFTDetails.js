import {GrTextAlignLeft} from 'react-icons/gr'
import {BsFillBookmarkFill} from 'react-icons/bs'


const style = {
  
}

const NFTDetails = () => {
  const dropdownData = [
    {
      title: 'Description',
      icon:<GrTextAlignLeft className ={style.icon} />
    },
    {
      title: 'Properties',
      icon: <BsFillBookmarkFill className = {style.icon} />
    },
  ]

  return(
    <div>NFT DETAILS</div>
  )
}
export default NFTDetails