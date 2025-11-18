import RestFood from './restauranfood.jpg';

function Main() {

  return (
    <>
      <main>
        <section className="hero">
          <section className="heroLeft">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Welcome to Little Lemon Website.</p>
            <button onClick={() => window.location.href = "/reservations"}>Reserve a Table</button>
          </section>

          <img src={RestFood} alt="Restaurant Food" width="20%"></img>
        </section>


        <section className="specials">

        </section>

        <section className="testimonials">

        </section>

        <section className="last">

        </section>

      </main>
    </>
  );
}

export default Main;
