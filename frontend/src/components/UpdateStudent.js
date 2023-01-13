import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

export default function UpdateStudent() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    // console.log(id);

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        const response = await axios.get(`http://localhost:8070/student/get/${id}`);
        setName(response.data.student.name);
        setAge(response.data.student.age);
        setGender(response.data.student.gender);

        console.log(response);
        console.log(response.data.student.name);
    };
    const updateStudent = async (e) => {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:8070/student/update/${id}`, {
            name,
            age,
            gender,
          });
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };

    return (

        <div className="container">
            <form onSubmit={updateStudent}>
                <div className="form-group">
                    <label for="name">Student Name</label>
                    <input type="text" className="form-control" id="name" value={name} placeholder="Enter Student Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }} />
                </div>
                <div className="form-group">
                    <label for="age">Student Age</label>
                    <input type="text" className="form-control" id="age" value={age} placeholder="Enter Student Age"
                        onChange={(e) => {
                            setAge(e.target.value);
                        }} />
                </div>
                <div className="form-group">
                    <label for="gender">Student Gender</label>
                    <input type="text" className="form-control" id="gender" value={gender} placeholder="Enter Gender"
                        onChange={(e) => {
                            setGender(e.target.value);
                        }} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}