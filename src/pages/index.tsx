import React from 'react'
import Button from '@/components/MyButton'
import { NextRouter, useRouter } from 'next/router'
import { Paths } from '@/constants/Paths'

const redirect = (url: string, router : NextRouter) => {
  router.push(url)
}


export default function Home() {
  const [count, setCount] = React.useState(0)
  const router = useRouter()
  React.useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1)
    }, count == 0 ? 300 : 1200)
  }, [count, setCount])
  return (
      <div className='mt-40 z-10 flex items-center flex-col  text-colors-white'>
        {count > 0 && <h1 className='text-xl mt-4 animate-fade'>Este <span className='italic'>domingo 19 de noviembre</span></h1>}
        {count > 1 && <h1 className='text-xl mt-4 animate-fade'>Si fuiste fiscal o presidente de Mesa</h1>}
        {count > 2 && <h1 className='text-xl mt-4 animate-fade'>Vení a Fiscalizar de manera online</h1>}
        {count > 3 &&
          <div className='mt-4 animate-fade'>
            <Button onClick={() => redirect(Paths.how, router)} className='text-light-blue-500 mx-1' size='md' color='white'>¿Como Hago?</Button>
            <Button onClick={() => redirect(Paths.form, router)} className='text-light-blue-500 mx-1' size='md' color='white'>Subir Telegrama</Button>
          </div>
        }
        {count > 4 && <h1 className='text-xl mt-4 animate-fade'>Por un escrutinio transparente!</h1>}
      </div>
  )
}


