import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// const API_URL = import.meta.env.VITE_API_URL;

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

function AllPhones() {
    const [phones, setPhones] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${API_URL}/phones`)
            .then((response) => {
                setPhones(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    if (!phones) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Phones</h1>
            <ul>
                {phones.map((phone) => (
                    <li key={phone._id}>
                        <Link to={`/phones/${phone._id}`}>{phone.name}</Link>
                        <img className="photos-phone" src={phone.imageFileName} alt={phone.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AllPhones;
