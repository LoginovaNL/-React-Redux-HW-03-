import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { setSortOption } from '../../features/sorting/sortingSliсe';
import css from './sorting.module.scss';

const SortingControls = () => {
  const dispatch = useAppDispatch()

  const [selectedOption, setSelectedOption] = useState<'cheap' | 'fast' | 'optimal'>('cheap')

  const handleClick = (option: 'cheap' | 'fast' | 'optimal') => {
    setSelectedOption(option) 
    dispatch(setSortOption(option)) 
  }

  return (
    <div className={css.buttons}>
      <button
        className={`${css.cheapButton} ${selectedOption === 'cheap' ? css.active : ''}`}
        onClick={() => handleClick('cheap')}
      >
        <h3>Самый дешевый</h3>
      </button>
      <button
        className={`${css.fastButton} ${selectedOption === 'fast' ? css.active : ''}`}
        onClick={() => handleClick('fast')}
      >
        <h3>Самый быстрый</h3>
      </button>
      <button
        className={`${css.optimalButton} ${selectedOption === 'optimal' ? css.active : ''}`}
        onClick={() => handleClick('optimal')}
      >
        <h3>Самый оптимальный</h3>
      </button>
    </div>
  )
}

export default SortingControls