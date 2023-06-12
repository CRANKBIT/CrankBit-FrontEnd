import { FC } from 'react'
import SideNav from '@/components/SideNavigationBar'
import Content from './components/Content/Content'
import Container from '@/layouts/Container/Container'

const KnowledgeBase: FC = () => (
  <div>
    <Container>
      <div className="flex text-xl min-h-[832px]]">
        <SideNav />
        <Content />
      </div>
    </Container>
  </div>
)

export default KnowledgeBase
