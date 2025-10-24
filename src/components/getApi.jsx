import axios from "axios";
import { useState, useEffect } from "react";
import CargaCards from "./Contenedor-Cards";

export default function GetApi() {

    const [data, setData] = useState([]);


    useEffect(() => {
        axios.get("/data.json")
            .then((res) =>
                setData(res.data))
            .catch((err) => console.log(err));
    }, []);
    if (data.length > 0) {
        console.log(data);
    }


    return (
        <>
            {!data && <CargaCards data ={data} />}

  

        </>
    )

}