import OurValues from "../../pageComponents/AboutUsPage/OurValues";
import OurCrew from "../../pageComponents/AboutUsPage/OurCrew";
import OurPartners from "../../pageComponents/AboutUsPage/OurPartners";
import styles from "../../pageComponents/AboutUsPage/AboutUsPage.module.css";
export default function Crew() {
  return (
    <div className={styles.app}>
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>About Us</h1>

        <section className={styles.card}>
          <h2>Our Values</h2>
          <OurValues />
        </section>

        <section className={styles.card}>
          <h2>The Crew</h2>
          <OurCrew />
        </section>

        <section className={styles.card}>
          <h2>Our Partners</h2>
          <OurPartners />
        </section>
      </main>
    </div>
  );
}
