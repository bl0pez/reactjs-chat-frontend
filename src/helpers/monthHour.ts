import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

export const monthHour = (date: Date) => {
    return moment(date).format('HH:mm a | MMMM Do')
}