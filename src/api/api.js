import axios from 'axios';



export const api = {
    sendMessage(name, email, message) {
        const formData = {name, email, message}
        return (
            axios.post('https://gmail-portfolio-smtp.herokuapp.com/sendMessage', formData)
                .then(()=>{
                    console.log('message was sent')
                })
        )

    }
}