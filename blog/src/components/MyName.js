export default function MyName(props) {
  return (
    <div className="article">
      <img src={props.aboutme.imageUrl} alt="working table" />
      <div className="title">
        <div className="titleHeader">
          <h4>My Name</h4>
        </div>
        <div className="description">
          <p>{props.aboutme.aboutMe}</p>
        </div>
      </div>
    </div>
  );
}
