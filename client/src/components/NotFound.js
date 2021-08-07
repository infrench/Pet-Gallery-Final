import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404 - Not Found</h1>
      <h2>We don't know any animal by that name...</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
