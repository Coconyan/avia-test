import dayjs from 'dayjs';
import { Flight } from '../../types/flight';
import './styles/flights-list-item.scss';
import { getDayOfTheWeek } from '../../utils/get-days-of-the-week';
import { ReactComponent as PlaneIcon } from '../../assets/plane.svg';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  monthsShort: [
    "Янв", "Фев", "Мар", "Апр", "Май", "Июн",
    "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"
  ]
});

type PropsType = {
  flight: Flight,
}

function FlightsListItem(props: PropsType) {
  const { flight } = props;
  const dateFrom = `${dayjs.unix(flight.unixDateTimeFrom).format("DD MMM YYYY")}, ${getDayOfTheWeek(dayjs.unix(flight.unixDateTimeFrom).day())}`;
  const dateTo = `${dayjs.unix(flight.unixDateTimeTo).format("DD MMM YYYY")}, ${getDayOfTheWeek(dayjs.unix(flight.unixDateTimeTo).day())}`;
  const timeFrom = dayjs.unix(flight.unixDateTimeFrom).format("HH:MM");
  const timeTo = dayjs.unix(flight.unixDateTimeTo).format("HH:MM");

  return (
    <div className="flight-list-item">
      <div className="flight-list-item__company">
        {flight.company}
        <button>Купить за {flight.price} ₽</button>
      </div>
      <div className="flight-list-item__info-wrapper">
        <div className="flight-list-item__info">
          <p className="flight-list-item__info-time">{timeFrom}</p>
          <p className="flight-list-item__info-airport">{`${flight.departure.shortname}, ${flight.departure.name}`}</p>
          <p className="flight-list-item__info-date">{dateFrom}</p>
        </div>
        <div className="flight-list-item__connections">
          Количество пересадок: {flight.connectionsCount}
          <div className="flight-list-item__connections-plane">
            <div/>
            <PlaneIcon />
          </div>
        </div>
        <div className="flight-list-item__info flight-list-item__info--to">
          <p className="flight-list-item__info-time">{timeTo}</p>
          <p className="flight-list-item__info-airport">{`${flight.arrival.name}, ${flight.arrival.shortname}`}</p>
          <p className="flight-list-item__info-date">{dateTo}</p>
        </div>
      </div>
    </div>
  );
}

export default FlightsListItem;