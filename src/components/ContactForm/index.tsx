import React, {useState} from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import {Box, FormControl, Grid, TextField} from "@mui/material";
// @ts-ignore
import * as yup from 'yup';
import {BiSend} from "react-icons/bi";

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    subject: yup.string().required(),
    message: yup.string().min(4)
})

interface IContactFormProps {

}

const ContactForm: React.FC<IContactFormProps> = ({}) => {
    const [form, setForm] = useState({
        name: {
            value: '',
            isError: false
        },
        email: {
            value: '',
            isError: false
        },
        subject: {
            value: '',
            isError: false
        },
        message: {
            value: '',
            isError: false
        },
        submitting: false
    });

    const handleSubmit = async (e: any) => {
        try {
            const isValid = await schema.validate({
                name: form.name.value,
                email: form.email.value,
                subject: form.subject.value,
                message: form.message.value
            })

            console.log(isValid)
            setForm((prevState) => ({
                ...prevState,
                submitting: true
            }))

            setTimeout(() => {
                setForm((prevState) => ({
                    ...prevState,
                    submitting: false
                }))
            }, 3500)
        } catch (error: any){
            console.log(error.errors)
        }

    }

    const handleTextChange = (e: any) => {
        setForm((prevState) => {
            return {
                ...prevState,
                [e.target.id]: {
                    // @ts-ignore
                    ...prevState[e.target.id],
                    value: e.target.value
                },
            }
        })
    }

    return <Box component={"form"} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={1} columns={2}>
            <Grid item xs={2} sm={2} md={1}>
                <FormControl fullWidth>
                    <TextField variant={"outlined"} label={"Name"} id={"name"} value={form.name.value} onChange={handleTextChange}
                       helperText={form.name.isError && "Please provide a name"} error={form.name.isError}/>
                </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={1}>
                <FormControl fullWidth>
                    <TextField variant={"outlined"} label={"Email"} id={"email"} value={form.email.value} onChange={handleTextChange}
                       helperText={form.email.isError && "Please provide a valid email address"} error={form.email.isError}/>
                </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <FormControl fullWidth>
                    <TextField variant={"outlined"} label={"Subject"} id={"subject"} value={form.subject.value} onChange={handleTextChange}
                       helperText={form.subject.isError && "Please provide a subject"} error={form.subject.isError}/>
                </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <FormControl fullWidth>
                    <TextField variant={"outlined"} label={"Message"} id={"message"} value={form.message.value} onChange={handleTextChange}
                       helperText={form.message.isError && "Please write a message"} error={form.message.isError} multiline rows={3}/>
                </FormControl>
            </Grid>
            <Grid item xs={2} sm={2} md={2}>
                <FormControl >
                    <LoadingButton sx={styles.sendButton} loading={form.submitting} variant={"contained"} endIcon={<BiSend />} onClick={handleSubmit}>Send</LoadingButton>
                </FormControl>
            </Grid>
        </Grid>
    </Box>
}

const styles = {
    main: {},
    sendButton: {
        padding: '10px 40px 10px 40px'
    }
}

export default ContactForm;
