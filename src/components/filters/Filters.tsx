import { useAppDispatch,useAppSelector } from '../../app/hooks';
import { toggleAirline,toggleStops } from '../../features/filters/filtersSlice';
import css from './filters.module.scss';

const airlinesOptions= ['Победа','Red Wings','S7 Airlines']
const stopsOptions = [
    { value: 0, label: 'Без пересадок' },
    { value: 1, label: '1 пересадка' },
    { value: 2, label: '2 пересадки' },
    { value: 3, label: '3 пересадки' }
  ];

  const Filters=()=>{
    const dispatch=useAppDispatch()
    const airlines=useAppSelector(state=>state.filters.airlinesFilter)
    const stops=useAppSelector(state=>state.filters.stopsFilter)
  
    return (
      <div>
        <div className={css.filters}>
  <h3>Количество пересадок</h3>
  <div className={css.card}>
    {stopsOptions.map((stop) => (
      <label key={stop.value} className={css.customCheckbox}>
        <input
          className={css.checkboxTransplants}
          type='checkbox'
          checked={stops.includes(stop.value)}
          onChange={() => dispatch(toggleStops(stop.value))}
        />
        <span className={css.checkmarkTransplants}></span>
        {stop.label}
      </label>
    ))}
  </div>
</div>

<div className={css.filters}>
  <h3>Компании</h3>
  <div className={css.card}>
    {airlinesOptions.map((airline) => (
      <label key={airline} className={css.customCheckbox}>
        <input
          type='checkbox'
          checked={airlines.includes(airline)}
          onChange={() => dispatch(toggleAirline(airline))}
        />
        <span className={css.checkmarkСompany}></span>
        {airline}
      </label>
    ))}
  </div>
</div>
      </div>
    )
  }
  
  export default Filters;