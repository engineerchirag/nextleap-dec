import { useParams } from "react-router-dom";

const Profile = () => {
    const params = useParams();
    console.log(params);
    return (
      <div>
        <h1>Content of profile page - {params.username}</h1>
        <p> zddf d ja sdfsdf nbdsfnds fn sdfb dsfbnsd asdas dahjdas dasd asdad ashjdasdabsdasd nas</p>
      </div>
    );
  };
  
  export default Profile;
  