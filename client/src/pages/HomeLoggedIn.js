import LoggedInNavBar from "../components/LoggedInNavBar";
import HomeLoggedInDesc from "../components/HomeLoggedInDesc";
import "./HomeLoggedIn.css";
import HomeLoggedInTable from "../components/HomeLoggedInTable";

function HomeLoggedIn() {
  return (
    <div>
      <LoggedInNavBar />
      <div className="double">
        <HomeLoggedInDesc
          title="Club name"
          paragraph="	Lorem ipsum dolor sit amet, sapien etiam, nunc amet dolor ac odio mauris justo. Luctus arcu, urna pr
        aesent at id quisque ac. Arcu es massa vestibulum malesuada, integer vivamus elit eu mauris eus, cum eros quis 
        aliquam wisi. Nulla wisi laoreet suspendisse integer vivamus elit eu mauris hendrerit facilisi, mi mattis pariatu
        r aliquam pharetra eget."
        />
      </div>
      <div>
        <HomeLoggedInTable 
            name="costin"
            age="23"
            position="mijlocas"
            goals="23"
            assists="13"
            contract="1 an"
            wage="314$"
        />
      </div>
    </div>
  );
}

export default HomeLoggedIn;
