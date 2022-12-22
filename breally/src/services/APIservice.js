const url = 'https://adchitects-cms.herokuapp.com'
const credentials = btoa('adchitects:jsrulezzz')

const APIService = {
  getPages: async function () {
    const res = await fetch(`${url}/pages`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
    const json = await res.json()
    return json
  },

  getPageContent: async function (id) {
    const res = await fetch(`${url}/page/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
    return await res.json()
  },

  addToNewsletter: async function (email) {
    try {
      const res = await fetch(`${url}/newsletter`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Authorization: `Basic ${credentials}`,
        },
        body: JSON.stringify(email),
      })
      return await res.json()
    } catch (err) {
      return console.log('Error adding email', err)
    }
  },
}

export default APIService
