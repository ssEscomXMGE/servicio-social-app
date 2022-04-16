import { useParams } from "react-router-dom";

export default function PageNotFound() {
  const params = useParams();
  let message = `"${params.pageName}" page not found`;
  return <p>{message}</p>;
}