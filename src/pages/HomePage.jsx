import NavBar from "../NavBar/NavBar.jsx";
import Thumbnail from '../ListThumb/Thumbnail.jsx';

export default function HomePage() {

  return (
    <>
      {/* Change user name to be dynamic */}
      <NavBar username="rohant20" />
      <div className="row thumbnailRow">
        <div className="col-lg-3">
          <Thumbnail listName="Every Day" descrip="Pretty much a list that helps me accomplish my Day to Day easily" />
        </div>
        <div className="col-lg-3">
          <Thumbnail listName="Every Day" descrip="Pretty much a list that helps me accomplish my Day to Day easily" />
        </div>
        <div className="col-lg-3">
          <Thumbnail listName="Every Day" descrip="Pretty much a list that helps me accomplish my Day to Day easily" />
        </div>
      </div>

    </>
  );
}


