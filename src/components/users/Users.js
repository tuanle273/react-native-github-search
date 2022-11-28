
import UserItem from "./UserItem";
const Users = (props) => {
    const { usersData } = props;
    
    return (
        <div style={userStyle}>
            {
                usersData.map((user) => (
                    <UserItem key={user.id} user={user} />
                
                ))}
        </div>
    );

};
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "3rem",
};
 
export default Users;
