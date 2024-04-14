import TitleDescription from "./TitleDescription";

export default function Article(props) {
  return (
    <div className="article">
      <img src={props.data.imageUrl} alt="article cover" />
      <div className="title">
        <div className="titleHeader">
          <h3>{props.data.heading}</h3>
          <h5>
            <span>Title description,</span>
            <span className="postedTime">{props.data.date}</span>
          </h5>
        </div>
        <TitleDescription data={props.data} />
      </div>
    </div>
  );
}
