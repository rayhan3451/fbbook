import { signin } from 'next-auth/client'
import Image from 'next/image'

function Login() {
 return (
  <div className="grid place-items-center">
   <Image
   src="https://links.papareact.com/t4i"
   height={400}
   width={400}
   objectFit="contain"
   />

   <h1 
   onClick={signin} 
   className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>

   <h1 className="p-5 text-center">এটা একটা Safe Facebook Clone Project. এই App এ Login করলে এটা শুধু আপনার Facebok Profile Name আর Profile Image ই শুধু সংগ্রহ করবে</h1>
  </div>
 )
}

export default Login


