import axios from 'axios'

// request header
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos' ,{
        headers: {
            Authorization: 'Client-ID JVrBUKCiDjr2DZMqV1RdPJSpiDKL-XGlvLzcvqmurXQ'
        },
        params: {
            query: term,
        }
    })
    // console.log(response)
    return response.data.results
}

export default searchImages