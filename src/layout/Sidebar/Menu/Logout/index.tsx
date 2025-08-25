import Item from "../Item";

function Logout(): React.ReactElement {
  return (
    <Item href={"/logout"} icon="/icons/ic_logout.svg">
      Logout
    </Item>
  );
}

export default Logout;
