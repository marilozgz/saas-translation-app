import LogoImage from "@logos/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "./ui/aspect-ratio"
function Logo() {
  return (
    <Link
      href='/'
      prefetch={false}
      className='overflow-hidden'>
      <div className='flex items-center w-72 h-24'>
        <AspectRatio
          ratio={16 / 9}
          className='flex items-center justify-center'>
          <Image
            src={LogoImage}
            height={64}
            className='dark:filter dark:invert'
            alt='logo'
          />
        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo
