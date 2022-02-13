import { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import axios from "axios";

const Home = () => {
    // fetch api stuff
    const [testEntity, setTestEntity] = useState("");

    axios.get(`http://127.0.0.1:8080/test_entity/test`).then((response) => {
        console.log(response.data);
        setTestEntity(response.data);
    });

    // useEffect(() => {
    //     const getTestEntity = async () => {
    //         const response = await axios.get(
    //             `http://127.0.0.1:8080/test_entity/test`
    //         );
    //         setTestEntity(response);
    //     };
    //     getTestEntity();
    // }, []);

    console.log(testEntity);

    return (
        <div>
            <p>Hello Jinn</p>
        </div>
    );
};

export default Home;
