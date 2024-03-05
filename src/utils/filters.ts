import { format, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

export function readableDate(date: string | Date) {
  if (!date) return "";
  return format(parseISO(date as string), "dd MMM yyyy", { locale: ru });
}
export const readableTime = (date: string | Date) => {
  if (!date) return "";
  return format(parseISO(date as string), "hh:mm BBB", { locale: ru });
};
