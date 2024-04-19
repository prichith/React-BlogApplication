import TitleDescription from "./TitleDescription";

export default function Blog(props) {
  return (
    <div className="">
      <img src={props.data.imageUrl} alt="article cover" />
      <div className="title">
        <div className="titleHeader">
          <h3>{props.data.title}</h3>
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
