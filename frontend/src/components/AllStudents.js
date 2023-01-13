import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import UpdateStudent from "./UpdateStudent";


export default function AllStudents() {

    const [students, setStudents] = useState([]);


    useEffect(() => {
        getStudents();
    }, [])

    function getStudents() {
        axios.get("http://localhost:8070/student/").then((res) => {
            setStudents(res.data);
            // console.log(res.data);
        }).catch((err) => {
            alert(err.message);
        })
    }
    
    const deleteStudent = async (id) => {
        try {
            // alert(id);
            await axios.delete(`http://localhost:8070/student/delete/${id}`);
            getStudents();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <h1>students List</h1>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Index</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                {/* {
                    students.map((val, key) => {
                        return <div key={key}>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{val.name}</Table.Cell>
                                    <Table.Cell>{val.age}</Table.Cell>
                                    <Table.Cell>Yes</Table.Cell>
                                </Table.Row>
                            </Table.Body>

                        </div>
                    })
                } */}

                <Table.Body>
                    {students.map((data, index) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{index + 1}</Table.Cell>

                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.age}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`edit/${data._id}`}>
                                        <Button>Update</Button>
                                    </Link>
                                    <Button
                                        onClick={() => deleteStudent(data._id)}
                                        className="button is-danger is-small"
                                    >
                                        Delete
                                    </Button>
                                </Table.Cell>

                            </Table.Row>
                        )
                    })}
                </Table.Body>

                {/* <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td>
                                <Link
                                    to={`edit/${user._id}`}
                                    className="button is-info is-small mr-1"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteUser(user._id)}
                                    className="button is-danger is-small"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </Table>
        </div>
    )
}