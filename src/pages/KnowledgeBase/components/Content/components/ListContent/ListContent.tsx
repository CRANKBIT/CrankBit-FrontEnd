interface Item {
  id: number
  text: string
}

interface ListContentProps {
  title: string
  listItems: Item[]
}

const ListContent: React.FC<ListContentProps> = ({ title, listItems }: ListContentProps) => {
  return (
    <div className="w-1/2">
      <div className="text-xl font-bold">{title}</div>
      <ul className="leading-10 mt-5 mb-5">
        {listItems.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListContent