import { FC } from 'react'
import {Link} from 'react-router-dom'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import Input from '@/components/Input'
import Button from '@/components/Button'


const Login: FC = () => (
  <AuthLayout>
    <div className="py-80 bg-white w-[640px] flex justify-center items-center">
      <div className="w-[280px]">
        <div>
          <h1 className="text-textColorBlack text-2xl mb-5 font-medium">Log in</h1>
          <p className="font-medium">User name or email</p>
          <Input type="email" placeholder="john@mail.com" />
          <p className="font-medium">Password</p>
          <div className="relative">
            <Input type="password" placeholder="******************" />
            <img className="absolute left-60 bottom-9" src="/svg/passwordIcon.svg" alt="" />
          </div>
          <Link to="/auth/login/reset-password" className="text-gray block mb-2">
            Forget Password?
          </Link>
          <div className="flex justify-center">
            <Button className="text-center w-[250px] h-10 bg-hover">
              <div>Log in</div>
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <hr className="w-28" />
          or
          <hr className="w-28" />
        </div>
        <div className="flex justify-center mb-2 relative">
          <button
            type="button"
            className="block text-center text-[#5E5E5E] w-[250px] h-10 rounded-md bg-white border-[#03111B] border-2"
          >
            Sign in with Google
          </button>
          <img className="absolute left-6 top-3" src="/svg/googleIcon.svg" alt="" />
        </div>
      </div>
    </div>
  </AuthLayout>
)
export default Login
