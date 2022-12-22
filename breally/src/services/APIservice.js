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
    return await res.json()
  },

  getPageContent: async function () {
    // eslint-disable-next-line no-undef
    const res = await fetch(`${url}/page/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
    return await res.json()
  },

  addToNewsletter: async function (event) {
    const res = await fetch(`${url}/newsletter`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify(event),
    })
    return await res.json()
  },
}

export default APIService
