import Image from 'next/image'

import Logo from '@/public/logo.svg'
import { Button } from '../button'
import Colors from '@/data/Colors'

const Header = () => {
  return (
    <div className="p-4 flex justify-between items-center">
      <Image src={Logo} alt="logo" width={40} height={40} />
      <div className="flex gap-5">
        <Button variant="ghost">Sign In</Button>
        <Button className="text-white" style={{ backgroundColor: Colors.BLUE }}>Get Started</Button>
      </div>
    </div>
  )
}

export default Header
