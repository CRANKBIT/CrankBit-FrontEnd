import { FC, useState } from 'react'

interface Props {
  service: string
  deleteHandler: () => void
}

const Item: FC<Props> = ({ service, deleteHandler }) => {
  const [editService, setEditservice] = useState(service)
  const [editSave, setEditSave] = useState(true)
  const editHandler = (): void => {
    setEditSave(!editSave)
  }
  const serviceContent = editSave ? (
    <input value={editService} className="w-[440px] h-[42px] bg-white rounded-lg shadow-lg flex items-center px-2" />
  ) : (
    <input
      onChange={(e) => {
        setEditservice(e.target.value)
      }}
      className="w-[440px] h-[42px] bg-white rounded-lg shadow-lg flex items-center px-2"
    />
  )
  return (
    <div className="flex items-center mb-3">
      {serviceContent}
      <button className="mx-2" type="button" onClick={deleteHandler}>
        <img src="/svg/ServiceItemDelete.svg" alt="delete" />
      </button>
      <button onClick={editHandler} className="bg-blue-700 text-white p-2 shadow-lg rounded-lg" type="button">
        {editSave ? 'Edit' : 'Save'}
      </button>
    </div>
  )
}
export default Item
