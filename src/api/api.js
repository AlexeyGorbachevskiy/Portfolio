import axios from 'axios';


export const api = {
    sendMessage(name, email, message) {
        const formData = {name, email, message}
        return (
            axios.post('https://gmail-portfolio-smtp.herokuapp.com/sendMessage', formData)
                .then((res) => {
                    console.log(res)
                    return res
                })
                .catch(err => console.log(err))
        )

    }
}
