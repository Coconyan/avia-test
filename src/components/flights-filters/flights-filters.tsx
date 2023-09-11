import {
  useEffect,
  useState
} from 'react';
import {
  useAppDispatch,
  useAppSelector
} from '../../hooks';
import './styles/flights-filters.scss';
import {
  changeCurrency,
  changeFilter
} from '../../store/data/data';
import { Filters } from '../../types/filters';
import { Currencies } from '../../const';
import { getCurrency } from '../../store/data/selectors';

function FlightsFilters() {
  const [filterAll, setFilterAll] = useState(true);
  const [filterWithout, setFilterWithout] = useState(false);
  const [filterOne, setFilterOne] = useState(false);
  const [filterTwo, setFilterTwo] = useState(false);
  const [filterThree, setFilterThree] = useState(false);
  const currency = useAppSelector(getCurrency);
  const dispatch = useAppDispatch();

  const handleChangeCurrency = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCurrency(e.target.value as Currencies))
  }

  const handleSetFilters = () => {
    const filters = []
    if (filterWithout) { filters.push(0) }
    if (filterOne) { filters.push(1) }
    if (filterTwo) { filters.push(2) }
    if (filterThree) { filters.push(3) }
    return filters
  };

  const handleSetOnlyWithout = () => {
    setFilterWithout(true);
    setFilterAll(false);
    setFilterOne(false);
    setFilterTwo(false);
    setFilterThree(false);
  };

  const handleSetOnlyOne = () => {
    setFilterOne(true);
    setFilterWithout(false);
    setFilterAll(false);
    setFilterTwo(false);
    setFilterThree(false);
  };

  const handleSetOnlyTwo = () => {
    setFilterTwo(true);
    setFilterWithout(false);
    setFilterAll(false);
    setFilterOne(false);
    setFilterThree(false);
  };

  const handleSetOnlyThree = () => {
    setFilterThree(true);
    setFilterWithout(false);
    setFilterAll(false);
    setFilterOne(false);
    setFilterTwo(false);
  };

  useEffect(() => {
    if (filterAll) {
      dispatch(changeFilter([Filters.All]));
      setFilterWithout(false)
      setFilterOne(false);
      setFilterTwo(false);
      setFilterThree(false);
    } else if (filterWithout || filterOne || filterTwo || filterThree) {
      dispatch(changeFilter(handleSetFilters()))
    } else {
      setFilterAll(true);
      dispatch(changeFilter([Filters.All]));
    }
  }, [filterAll, filterOne, filterTwo, filterThree, filterWithout]);

  return (
    <div className="flights-filters">
      <h2>Валюта</h2>
      <div className="flights-filters__filter-wrapper">
        <input
          type="radio"
          name="radio"
          id={Currencies.Rub}
          value={Currencies.Rub}
          checked={currency == Currencies.Rub ? true : false}
          onChange={handleChangeCurrency}
        />
        <label
          htmlFor={Currencies.Rub}
          className={`radio-label ${currency == Currencies.Rub ? 'active' : ''}`}
        >
          {Currencies.Rub}
        </label>
        <input
          type="radio"
          name="radio"
          id={Currencies.Usd}
          value={Currencies.Usd}
          checked={currency == Currencies.Usd ? true : false}
          onChange={handleChangeCurrency}
        />
        <label
          className={`radio-label ${currency == Currencies.Usd ? 'active' : ''}`}
          htmlFor={Currencies.Usd}
        >
          {Currencies.Usd}
        </label>
        <input
          type="radio"
          name="radio"
          id={Currencies.Eur}
          value={Currencies.Eur}
          checked={currency == Currencies.Eur ? true : false}
          onChange={handleChangeCurrency}
        />
        <label
          className={`radio-label ${currency == Currencies.Eur ? 'active' : ''}`}
          htmlFor={Currencies.Eur}
        >
          {Currencies.Eur}
        </label>
      </div>

      <h2>Количество пересадок</h2>
      <label htmlFor="all">
        <input
          type="checkbox"
          id="all"
          checked={filterAll}
          onChange={() => { setFilterAll(true) }}
        />
        Все
      </label>

      <div className="flights-filters__filter-wrapper">
        <label htmlFor="without">
          <input
            type="checkbox"
            id="without"
            checked={filterWithout}
            onChange={() => {
              setFilterAll(false);
              setFilterWithout(!filterWithout);
            }}
          />
          Без пересадок
        </label>
        <span onClick={handleSetOnlyWithout}>ТОЛЬКО</span>
      </div>

      <div className="flights-filters__filter-wrapper">
        <label htmlFor="one">
          <input
            type="checkbox"
            id="one"
            checked={filterOne}
            onChange={() => {
              setFilterAll(false);
              setFilterOne(!filterOne)
            }}
          />
          1 пересадка
        </label>
        <span onClick={handleSetOnlyOne}>ТОЛЬКО</span>
      </div>

      <div className="flights-filters__filter-wrapper">
        <label htmlFor="two">
          <input
            type="checkbox"
            id="two"
            checked={filterTwo}
            onChange={() => {
              setFilterAll(false);
              setFilterTwo(!filterTwo)
            }}
          />
          2 пересадки
        </label>
        <span onClick={handleSetOnlyTwo}>ТОЛЬКО</span>
      </div>

      <div className="flights-filters__filter-wrapper">
        <label htmlFor="three">
          <input
            type="checkbox"
            id="three"
            checked={filterThree}
            onChange={() => {
              setFilterAll(false);
              setFilterThree(!filterThree)
            }}
          />
          3 пересадки
        </label>

        <span onClick={handleSetOnlyThree}>ТОЛЬКО</span>
      </div>
    </div>
  );
}

export default FlightsFilters;