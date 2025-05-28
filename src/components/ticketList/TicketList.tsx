import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTicketsThunk } from '../../features/tickets/ticketsSlice';
import { selectAll as selectAllTickets } from '../../features/tickets/ticketsSlice';
import type { RootState } from '../../app/store';
import {PobedaIcon} from '../../components/icons/Pobeda-icon';
import {RedWingsIcon} from '../../components/icons/RedWings-icon';
import {S7AirlinesIcon} from '../../components/icons/S7Airlines-icon';
import css from './ticketList.module.scss';

const getAirlineIcon = (name: string) => {
  switch (name) {
    case 'Победа':
      return <PobedaIcon />;
    case 'Red Wings':
      return <RedWingsIcon />;
    case 'S7 Airlines':
      return <S7AirlinesIcon />;
    default:
      return null;
  }
};

const formatNumberWithSpaces = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

const TicketList = () => {
  const dispatch = useAppDispatch()
  const tickets = useAppSelector(selectAllTickets)
  const status = useAppSelector((state: RootState) => state.tickets.loadingStatus)
  const filters = useAppSelector((state: RootState) => state.filters)
  const sortOption = useAppSelector((state: RootState) => state.sorting.sortOption)

  useEffect(() => {
    dispatch(fetchTicketsThunk())
  }, [dispatch])

  let filteredTickets = tickets

  if (filters.airlinesFilter.length > 0) {
    filteredTickets = filteredTickets.filter(ticket =>
      filters.airlinesFilter.includes(ticket.airline)
    )
  }

  if (filters.stopsFilter.length > 0) {
    filteredTickets = filteredTickets.filter(ticket =>
      filters.stopsFilter.includes(ticket.stops)
    )
  }

  let sortedTickets = [...filteredTickets]
  switch (sortOption) {
    case 'cheap':
      sortedTickets.sort((a, b) => a.price - b.price);
      break;
    case 'fast':
      sortedTickets.sort((a, b) => a.duration - b.duration);
      break;
    case 'optimal':
      sortedTickets.sort(
        (a, b) =>
          a.price + a.duration / 60 - (b.price + b.duration / 60)
      );
      break;
  }

  if (status === 'loading') {
    return <div>Загрузка билетов...</div>
  }

  if (status === 'failed') {
    return <div>Ошибка загрузки билетов. Попробуйте позже.</div>
  }

  return (
    <div>
      {sortedTickets.length === 0 ? (
        <p>Нет подходящих билетов по выбранным фильтрам.</p>
      ) : (
        sortedTickets.map(ticket => (
          <div key={ticket.id} className={css.ticket}>
            <div className={css.firstColumn}>
            <h3 className={css.price}>{formatNumberWithSpaces(ticket.price)} Р</h3>
            <p className={css.airport}>SVO-LED</p>
            <p className={css.stops}>{ticket.time}</p>
            </div>
            <div className={css.secondColumn}>
              <p className={css.airport}>В пути</p>
              <p className={css.stops}>{Math.floor(ticket.duration / 60)}ч {ticket.duration % 60}мин</p>
            </div>
            <div className={css.thirdColumn}>
              <div className={css.airlines}>{getAirlineIcon(ticket.airline)}</div>
              <p className={css.transplants}>Пересадки</p>
              <p className={css.stopsText}>{ticket.stopsText}</p>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default TicketList