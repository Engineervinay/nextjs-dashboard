import React from 'react'
import Image from 'next/image'
import Bitcoin from './images/bitcoin.png';
export default function ContainerReferal() {
  return (
    <div className='container-sm w-5/12 p-8 pb-0 bg-white dark:bg-darkcontainer  shadow-xl rounded-md'> 
    <div className='flex dark:text-white flex-column flex-wrap justify-items-center justify-center gap-5'>  
      <div className='justify-self-start text font-bold h-2 '> Referal System:</div>
      <div className='text'> Earn 10% direct refferals and 5% for indirect referrals</div>
      <div className="w-64 h-auto "> 
      <Image src={Bitcoin} alt="Picture of the author"
    layout="responsive" 
    objectFit="cover" 
    className="rounded-full" 
     />
</div>
    </div> 
     </div>

  )
}

