import styles from "./InfoCards.module.css"
function InfoCards() {
  const info = [
    { label: "Feels Like", value: "18°"},
    { label: "Humidity", value: "46%"},
    { label: "Wind", value: "14 km/h"},
    { label: "Precipitation", value: "0 mm"},
  ];

  return (
    <div className={styles.infoCards}>
      {info.map((item, i) => (
        <div className={`${styles.infoCard} fade-up`} key={i}>          
          <p>{item.label}</p>          
          <h4>{item.value}</h4>
        </div>        
      ))}      
    </div>
  );
}

export default InfoCards;
