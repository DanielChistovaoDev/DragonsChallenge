import { format } from 'date-fns';

// formata a data da api para exibição em tela
export const formatDateString = (dateString: string): string => {
  const parsedDate = new Date(dateString);
  const formattedDate = parsedDate.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });

  return formattedDate;
};

//converte um new date para o formato da api
export const convertDateToISOString = (date: Date): string => {
  return format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
}

// retorna a data com a hora correta de acordo com o horário do Brasil
export const getNewDateAPIFormat = () => {
  const currentDate = new Date();
  const threeHoursAgo = new Date(currentDate);
  threeHoursAgo.setHours(currentDate.getHours() - 3);
  return threeHoursAgo;
}