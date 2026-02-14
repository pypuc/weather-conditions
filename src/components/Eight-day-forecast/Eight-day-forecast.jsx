import styles from "./Eight-day-forecast.module.css";


export const EightDayForecast = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <h2>8-day forecast</h2>
        <ul>
          <li>
            <h4>Fri, Oct 13</h4>
            <img src="/images/rain.svg" alt="rain" />
            <p>23/14℃</p>
            <p>light rain</p>
          </li>
          <li>
            <h4>Sat, Oct 14</h4>
            <img src="/images/rain.svg" alt="rain" />
            <p>22/10℃</p>
            <p>light rain</p>
          </li>
          <li>
            <h4>Sun, Oct 15</h4>
            <img src="/images/rain.svg" alt="rain" />
            <p>13/6℃</p>
            <p>light rain</p>
          </li>
          <li>
            <h4>Mon, Oct 16</h4>
            <img src="/images/clouds-sun.svg" alt="few clouds" />
            <p>12/4℃</p>
            <p>few clouds</p>
          </li>
          <li>
            <h4>Tue, Oct 17</h4>
            <img src="/images/black-clouds.svg" alt="overcast clouds" />
            <p>12/4℃</p>
            <p>overcast clouds</p>
          </li>
          <li>
            <h4>Wed, Oct 18</h4>
            <img src="/images/sun.svg" alt="clear sky" />
            <p>13/3℃</p>
            <p>clear sky</p>
          </li>
          <li>
            <h4>Thu, Oct 19</h4>
            <img src="/images/black-clouds.svg" alt="overcast clouds" />
            <p>12/5℃</p>
            <p>overcast clouds</p>
          </li>
          <li>
            <h4>Fri, Oct 20</h4>
            <img src="/images/clouds.svg" alt="scattered clouds" />
            <p>9/3℃</p>
            <p>scattered clouds</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
