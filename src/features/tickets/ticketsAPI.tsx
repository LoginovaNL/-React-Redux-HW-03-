export interface Ticket {
    id: string;
    price: number;
    duration: number; 
    stops: number;
    stopsText: string;    
    airline: string;
    time: string;
  }
  
  const fakeTickets: Ticket[] = [
    { id: '1', price: 12680, duration: 270, stops: 1, stopsText: '1 пересадка', airline: 'Победа', time: '12:00 - 16:30' },
    { id: '2', price: 21500, duration: 120, stops: 0, stopsText: 'Без пересадок', airline: 'Red Wings', time: '14:00 - 16:00' },
    { id: '3', price: 23995, duration: 520, stops: 2, stopsText: '2 пересадки', airline: 'S7 Airlines', time: '4:50 - 13:30' }
  ];
  
  export const fetchTickets = (): Promise<Ticket[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(fakeTickets), 1000);
    });
  };  