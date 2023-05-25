import File from "../File/File";
import Text from "../Text/Text";
import WordCounter from "../WordCounter/WordCounter";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="card">
        <div className="left">
          <Text />
          <File />
        </div>
        <div className="right">
          <WordCounter />
        </div>
      </div>
    </div>
  );
};

export default Home;
