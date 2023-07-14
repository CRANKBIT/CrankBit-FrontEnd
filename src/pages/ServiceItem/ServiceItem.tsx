import { FC } from 'react'
import { Link } from 'react-router-dom'
import CompanyLayout from '@/layouts/CompanyLayout'
import ItemsList from './components/ItemsList/ItemsList'

const ServiceItem: FC = () => (
  <CompanyLayout>
    <div className="bg-userContent pt-14 px-20 min-h-screen">
      <div>
        <h1 className="text-2xl font-bold">Create New Report</h1>
        <div className="flex">
          <Link to="/user/my-reports" className="text-blue-700 underline">
            My Reports
          </Link>
          <img src="/svg/Arrow.svg" alt="arrow" />
          <div>Create New Report</div>
        </div>
      </div>
      <div className="flex justify-center mt-[80px]">
        <ItemsList />
      </div>
    </div>
  </CompanyLayout>
)
export default ServiceItem
