import React from "react";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
    const {uid} = useParams();
    return (
    <div>{uid}</div>
    )
}
export default ProfilePage;