import { FC } from 'react'
import { Link } from 'react-router-dom'
import CompanyLayout from '@/layouts/UserLayout/UserLayout'

const MyAccount: FC = () => (
  <CompanyLayout>
    <div className="bg-userContent min-h-screen p-10">
      <h1>Hi, Alonso</h1>
      <div className="text-end">Edit</div>
      <div className="flex justify-around">
        <div> email</div> <div>123.com</div>
      </div>
      <div>
        <div className="text-end">Edit</div>
        <h1>companylist</h1>
        <div className="flex gap-10">
          <Link to="/user/my-reports">
            <img src="/svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
          <Link to="/user/my-reports">
            <img src="/svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
          <Link to="/user/my-reports">
            <img src="/svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
          <Link to="/user/my-reports">
            <img src="/svg/CompanyOne.png" alt="Company Logo" className="h-[100px] rounded-[100px]" />
          </Link>
        </div>
      </div>
    </div>
  </CompanyLayout>
)

export default MyAccount
