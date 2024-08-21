//export all components from here
import tw from 'tailwind-styled-components'

export const Container = tw.div`
    border-2
    border-solid 
    border-black 
    p-20 
    rounded-md 
    text-3xl 
    text-center 
    space-y-4
`

export const Content = tw.p`
    transform 
    hover:scale-110 duration-700 ease-in-out  
    cursor-pointer 
    mt-2 
    text-lg 
    underline 
    hover:text-blue-500
`
