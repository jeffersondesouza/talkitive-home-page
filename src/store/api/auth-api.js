import axios from 'axios';

const login = ({ email, password }) => axios.post('login/email-and-password', { email, password })

const signup = ({ email, password }) => axios.post('https://api.dev.talkative.media/v1/login/email-and-password', { email, password })


export default {
  login
}
