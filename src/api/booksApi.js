const baseUrl = "http://localhost:3000/api";

const fetchBook = async (id) => {
    const response = await fetch(`${baseUrl}/books/${id}`)
    await handleErrorResponse(response);
    return await response.json();
}

const fetchBooks = async () => {
    const response = await fetch(`${baseUrl}/books`)
    await handleErrorResponse(response);
    return await response.json();
}

async function handleErrorResponse(response) {
    if (!response.ok) {
        const error = await response.json()
        throw Error(`${response.statusText}: ${error.message}`)
    }
}

export {fetchBook, fetchBooks}
