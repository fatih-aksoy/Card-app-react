import "./Card.css";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <div className="wrapper">
      <Card
        img="https://photoxshop.ir/collagemaker/wp-content/uploads/2022/11/azula-27.jpg"
        title="Azula"
        description="Azula is known for being a skilled strategist and manipulator. As her brother Zuko states, she always lies. "
      />
      <Card
        img="https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/e/ee/Amon_img.jpg"
        title="Amon"
        description="Amon, born as Noatak, was the charismatic and mysterious leader of an anti-bender revolutionary group known as the Equalists. "
      />
      <Card
        img="https://upload.wikimedia.org/wikipedia/en/9/90/Zaheer_%28The_Legend_of_Korra%29.png"
        title="Zaheer"
        description="Zaheer is a boy's name, meaning blossoming. The title has bloomed from the Arabic name Zahir."
      />
    </div>
  );
}

export default App;
