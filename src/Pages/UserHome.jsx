import { useContext } from "react";
import { AuthContext } from "../component/AuthProvider";


const UserHome = () => {

    const {user} = useContext(AuthContext)
    return (
        <div>
            <div>
                <h1>hi there this is user home</h1>
            </div>
            {
                user?.displayName ? user.displayName : "back"
            }
        </div>
    );
};

export default UserHome;