import apiUrl from '../../apiConfig'
import axios from 'axios'

const sendMessage = (name, email, message) => {
  console.log('is in api state', name, email, message)
  return axios({
    method: 'POST',
    url: apiUrl + `/send`,
    data: {
      name,
      email,
      message
    }
  })
}

export default sendMessage
