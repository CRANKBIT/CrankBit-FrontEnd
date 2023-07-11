
import { ChangeEvent, FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Input, IconButton, InputAdornment, Typography } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import AuthLayout from '@/layouts/AuthLayout/AuthLayout'
import Button, { Variant, Size } from '@/components/Button/Button'
import axios from '@/utils/axios'
import Modal from '@/pages/CreateAccount/components/Modal/Modal'

const ResetPassword: FC = () => {
  const [password, setpassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [confirmPasswordvisible, setconfirmPasswordvisible] = useState(false)
  const [passwordError, setpasswordError] = useState('')
  const [confirmPasswordError, setconfirmPasswordError] = useState('')
  const [message, setMessage] = useState<string>('')

  const location = useLocation()
  const token = new URLSearchParams(location.search).get('token')

  const inputClassName =
    'w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-gray-400'

  const togglePasswordVisibility = (): void => {
    setconfirmPasswordvisible(!confirmPasswordvisible)
  }

  const handleInputChange =
    (setValue: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target
      setValue(value)
      let errorMessage = ''
      if (setValue === setpassword) {
        if (value.length < 6 || !/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
          errorMessage = 'At least 6 characters with 1 letter'
        }
        setpasswordError(value !== '' ? errorMessage : '')
      }
      if (setValue === setconfirmPassword) {
        if (value !== password) {
          errorMessage = 'Password not match'
        }
        setconfirmPasswordError(value !== '' ? errorMessage : '')
      }
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/v1/auth/update-password', {
        password,
        token,
      })
      setMessage(response.data.message)
    } catch (error) {
      const errorMessage =
        (error as { response?: { data: { message: string } } }).response?.data.message || 'An unkonw error occurred'
      setMessage(errorMessage)
    }
  }

  const handleClosePopup = (): void => {
    setMessage('')
  }
  const isError = !message.includes('successfully')

  return (
    <AuthLayout>
      <div className="w-1/2">
        <form onSubmit={handleSubmit}>
          <div className="font-medium mb-5 text-xl">Set new password</div>
          <div className="mt-4 text-lg font-bold">New Password</div>
          <Input
            id="New password"
            type="password"
            value={password}
            placeholder="******"
            className={inputClassName}
            onChange={handleInputChange(setpassword)}
          />
          <div>
            <Typography className="caption" color="error">
              {passwordError}
            </Typography>
          </div>
          <div className="mt-4 text-lg font-bold">Confirm Password</div>
          <Input
            id="Confim Password"
            type={confirmPasswordvisible ? 'text' : 'password'}
            className={inputClassName}
            placeholder="******"
            value={confirmPassword}
            onChange={handleInputChange(setconfirmPassword)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {confirmPasswordvisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <div>
            <Typography className="caption" color="error">
              {confirmPasswordError}
            </Typography>
          </div>
          <Button variant={Variant.Primary} size={Size.Large} className="font-bold mt-8 w-full" type="submit">
            Update Password
          </Button>
        </form>
        {message && <Modal onClose={handleClosePopup} error={isError ? new Error(message) : undefined} />}
import React, { useState, FC, ChangeEvent, FormEvent } from 'react'
import AuthLayout from '@/layouts/AuthLayout'

interface Props {
  onClose?: () => void
}

const ResetPassword: FC<Props> = () => {
  const [email, setEmail] = useState('')
  const [, setEmailSent] = useState(false)

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    // Perform the password reset request here using the email
    // Show a success message or redirect to another page
    setEmailSent(true)
  }
  // import from modal insted of this
  //
  // if (emailSent) {
  //   return (
  //     <AuthLayout>
  //       <div className="fixed top-0 left-0 bottom-0 right-0 bg-background/40 flex items-center justify-center z-50">
  //         <div className="flex items-center justify-center min-h-screen">
  //           <div className=" text-center rounded-[10px] bg-white w-[490px] h-[400px] ">
  //             <div className="text-end">
  //               <CloseRoundedIcon className="cursor-pointer mt-5 mr-5" onClick={onClose} />
  //             </div>
  //             <div className="text-2xl font-bold mt-5">
  //               Check your email
  //               <div />
  //               <MarkEmailUnreadOutlined className="w-[99px] h-[99px] text-white rounded-full bg-[#6F6F6F] mt-10 " />
  //               <div className="text-center text-xl font-medium p-10">
  //                 An email regarding your password change has been sent to your email address.
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </AuthLayout>
  //   )
  // }

  return (
    <AuthLayout>
      <div className="bg-userContent flex justify-center items-center w-full h-screen">
        <div className="w-1/2">
          <div className="text-xl font-bold mb-5">Forgot Password?</div>
          <div className="font-bold text-gray mb-10">Please enter your email address to reset your password</div>
          <form onSubmit={handleSubmit}>
            <div className="text-xl">
              <label htmlFor="email" className="block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mb-20 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-primary text-white text-xl font-bold rounded hover:bg-blue-800"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  )
}

export default ResetPassword
