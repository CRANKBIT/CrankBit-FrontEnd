import { FC, ChangeEvent } from 'react'

interface Props {
  addItem: string
  addHandler: () => void
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const AddItem: FC<Props> = ({ addItem, addHandler, changeHandler }) => (
  <div className="flex items-center mt-3">
    <div>
      <input
        value={addItem}
        className="w-[440px] h-[42px] rounded-lg shadow-lg px-2 "
        onChange={changeHandler}
        placeholder="Add more item here.."
      />
    </div>
    <button className="bg-black text-white p-2 shadow-lg rounded-lg mx-8" type="button" onClick={addHandler}>
      Add
    </button>
  </div>
)

export default AddItem
