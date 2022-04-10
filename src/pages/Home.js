import HomeTextBox from "../components/HomeTextBox";
import HomeTextListBox from "../components/HomeTextListBox";
import "./Home.css";
/*
const lista = [
  {
    text: "Easier managing of the club",
  },
  {
    text: "Statistics about the squad's players",
  },
  {
    text: "Details about the staff members",
  },
  {
    text: "Wage management",
  },
];
*/
function Home() {
  return (
    <section className="sectiune">
      <div>
        <HomeTextListBox
          title="Manage your football club the easy way"
          text1="Easier managing of the club"
          text2="Statistics about the squad's players"
          text3="Details about the staff members"
          text4="Wage management"
        />

        <HomeTextBox
          text="Our website is dedicated to managing different administrative parts of a football club, especially to clubs from the lower leagues within Europe, but can also be used for amateur teams (“Sunday League”) or even minifootball teams."
          title="What are we offering"
        />
      </div>
    </section>
  );
}

export default Home;
