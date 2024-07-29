import axios from "axios";
import { get } from "mongoose";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getme } from "../utils/getme";
import { Table } from "../components/Table";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [flightData, setFlightData] = useState([]);
  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await getme();
      if (!isAuthenticated) {
        navigate("/signin");
      }
    };

    checkAuth();
  }, [navigate]);

  const getFlight = async () => {
    const result = await axios.get("http://localhost:3000/api/v1/flight");
    console.log(result.data);
    setFlightData(result.data);
  };

  useEffect(() => {
    getFlight();
  }, []);

  return (
    <div className="bg-black p-10">
      <Table data={flightData} />
    </div>
  );
};
