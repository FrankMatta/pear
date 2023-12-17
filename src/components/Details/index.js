// @ts-nocheck
import "./details.scss";
import Tags from "../Tags";

const Details = () => {
  return (
    <section className="details">
      <div className="tags">
        <Tags />
      </div>
      <div className="details-text_container">
        <p>
          Pear will be used by large investors wanting to buy or sell massive
          amounts of any token without negatively effecting the chart or losing
          out to taxes and price impact. Pear will be used by small investors
          that prefer OTC but are wary of getting scammed. Developers and teams
          can take profit without hurting their own projects. Investors of all
          shapes and sizes can avoid snipers and sandwich bots.
        </p>
        <p>
          Pear has many, many uses, and users will be able to swap any
          cryptocurrency for any other, or for fiat.
        </p>
        <p>
          NOTE: Pear has no relationship with any of the tokens being traded or
          any of the people using the platform. The safeguard to avoid getting
          scammed, frontrun etc is by using the Pear platform, but we bare no
          responsibility for the price two users agree upon.
        </p>
      </div>
    </section>
  );
};
export default Details;
