import CityItem from './CityItem';
import Message from './Message';
import styles from './CityList.module.css';
import Spinner from './Spinner';
export default function CityList({cities, loading}){
  if(loading) return <Spinner/>
  if(!cities.length) return <Message message='Add your first city by cliking on a city map'/>
  return(
    <ul className={styles.cityList}>
        {cities.map((city) => <CityItem city={city} key={city.country}/>)}
    </ul>
  );
}