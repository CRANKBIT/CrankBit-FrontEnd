import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { FC, useState, useRef, useEffect } from 'react'
import { addDays } from 'date-fns'
import { DateRangePicker, RangeKeyDict, Range } from 'react-date-range'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

const DatePicker: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const refOne = useRef<HTMLInputElement>(null)
  const [state, setState] = useState<Range[]>([
    {
      startDate: addDays(new Date(), -7),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const hideOnEscape = (e: KeyboardEvent): void => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }
  const handleClickOutside = (event: MouseEvent): void => {
    if (refOne.current && !refOne.current.contains(event.target as Node)) {
      setOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', handleClickOutside, true)
  }, [])

  return (
    <div className="relative">
      <div className="w-[215px] h-8 rounded bg-white flex items-center">
        <input
          value={`${state[0].startDate?.toLocaleString().split(',')[0]}-${
            state[0].endDate?.toLocaleString().split(',')[0]
          }`}
          readOnly
          className="inputBox w-[190px] text-center"
        />
        <button type="button" onClick={() => setOpen(!open)}>
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </button>
      </div>

      <div ref={refOne} className="z-10 absolute top-[35px] right-0">
        {open && (
          <DateRangePicker
            onChange={(item: RangeKeyDict) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            rangeColors={['#007AD3']}
          />
        )}
      </div>
    </div>
  )
}

export default DatePicker
