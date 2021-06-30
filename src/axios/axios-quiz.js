import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-c87f0-default-rtdb.europe-west1.firebasedatabase.app/'
})