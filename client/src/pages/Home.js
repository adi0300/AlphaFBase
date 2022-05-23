import HomeTextBox from "../components/HomeTextBox";
import HomeTextListBox from "../components/HomeTextListBox";
import Tabel from "../components/Tabel";
import "./Home.css";

function Home() {
  return (
    <div>
    <section className="sectiune">
      <div className="double">
        <HomeTextListBox
          className="single"
          title="What are we offering"
          text1="Easier managing of the club"
          text2="Statistics about the squad's players"
          text3="Details about the staff members"
          text4="Wage management"
          linktext="Find out more"
        />

        <HomeTextBox
          className="single"
          text="Our website is dedicated to managing different administrative parts of a football club, especially to clubs from the lower leagues within Europe, but can also be used for amateur teams (“Sunday League”) or even minifootball teams."
          title="Manage your football club the easy way"
          linktext="Get our services and create your account"
        />
      </div>
    </section>
    <section>
      <Tabel/>
    </section>
    </div>
  );
}

export default Home;
