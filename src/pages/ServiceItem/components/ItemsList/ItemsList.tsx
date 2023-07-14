import { FC, useState, ChangeEvent } from 'react'
import { v4 as uuid } from 'uuid'
import Item from './components/Item'
import AddItem from './components/AddItem'

const initItems = [
  {
    id: uuid(),
    service: 'Check wipers',
  },
  {
    id: uuid(),
    service: 'Check all lights',
  },
  {
    id: uuid(),
    service: 'Check all fluids level',
  },
  {
    id: uuid(),
    service: 'Check drive belt',
  },
  {
    id: uuid(),
    service: 'Check battery',
  },
  {
    id: uuid(),
    service: 'Check tyres',
  },
  {
    id: uuid(),
    service: 'Check brakes',
  },
  {
    id: uuid(),
    service: 'Check suspension',
  },
  {
    id: uuid(),
    service: 'Replace oil filter and oli',
  },
  {
    id: uuid(),
    service: 'Rotated wheels',
  },
  {
    id: uuid(),
    service: 'Road test',
  },
]

const ItemsList: FC = () => {
  const [items, setItems] = useState(initItems)
  const [addItem, setAdditem] = useState('')
  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setAdditem(e.target.value)
  }
  const deleteHandler = (id: string): void => {
    setItems(items.filter((item) => item.id !== id))
  }
  const addHandler = (): void => {
    setItems((preItems) => [
      ...preItems,
      {
        id: uuid(),
        service: addItem,
      },
    ])
    setAdditem('')
  }

  return (
    <div className="py-8">
      <div className="text-center mb-5">
        <h2 className="text-lg font-bold">Service Items</h2>
        <div className="w-[320px] h-[1px] bg-[#03111B] mx-auto" />
      </div>
      <div>
        {items.map((item) => (
          <Item key={item.id} service={item.service} deleteHandler={() => deleteHandler(item.id)} />
        ))}
      </div>
      <div>
        <AddItem addItem={addItem} addHandler={addHandler} changeHandler={changeHandler} />
      </div>
    </div>
  )
}
export default ItemsList
