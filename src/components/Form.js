import React, { useState } from 'react'
import { Container, Grid, Box, Paper, TextField, makeStyles, Button, IconButton } from "@material-ui/core"
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.grey[300],
        padding: theme.spacing(5),
    },
}))

function EditForm() {
    const userData = {
        name: "",
        lastName: "",
        email: ""
    };
    const [users, setUsers] = useState([userData])
    const addUser = () => {
        setUsers([...users, userData])
    }
    const onChange = (e, index) => {
        const updatedUsers = users.map((user, i) => index == i ?
            Object.assign(user, { [e.target.name]: e.target.value })
            : user
        )
        setUsers(updatedUsers)
    }

    const removeUser = (index) => {
        const filteredUsers = [...users]
        filteredUsers.splice(index, 1)
        setUsers(filteredUsers)
    }

    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Paper component={Box} p={4}>
                {
                    users.map((user, index) => (
                        <Grid container spacing={3} key={index}>
                            <Grid item md={3}>
                                <TextField
                                    label="Name"
                                    placeholder='Enter your name'
                                    variant="outlined"
                                    name="name"
                                    onChange={e => onChange(e, index)}
                                    value={user.name}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="lastName"
                                    placeholder="Enter your Last name"
                                    variant="outlined"
                                    name="lastName"
                                    onChange={e => onChange(e, index)}
                                    value={user.lastName}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={3}>
                                <TextField
                                    label="Email"
                                    placeholder="Enter your Email"
                                    variant="outlined"
                                    name="email"
                                    onChange={e => onChange(e, index)}
                                    value={user.email}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item md={2}>
                                <IconButton color="secondary" onClick={() => removeUser(index)}>
                                    <DeleteOutlinedIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    ))
                }
                <Button variant="contained" color="primary" onClick={addUser} style={{ display: 'flex', marginTop: '5px' }}>Add Row</Button>
            </Paper>

        </Container>
    )
}

export default EditForm
