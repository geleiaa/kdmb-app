//import { useEffect, useState } from "react";
const { default: Footer } = require("@/components/Footer")
const { default: HeaderNav } = require("@/components/HeaderNav")

//const getUserProfile = () => {
//     const userTk = localStorage.getItem('token');

//     fetch('http://localhost:1234/users/me', {
//         method: 'GET'
//     })
//         .then((resp) => resp.json());
// }

const Profile = () => {
    //     const [user, getUser] = useState('');

    //     useEffect(() => {
    //         let ignore = false;
    //         getUser(null);
    //         const resp = getUserProfile();
    //     }, [])

    return (
        <>
            <HeaderNav />
            <h2>Teste 1</h2>
            <h3>Teste 2</h3>
            <Footer />
        </>
    )
}

export default Profile;