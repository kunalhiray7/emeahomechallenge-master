const baseUrl = "http://localhost:3000/api";

const fetchBook = async (id) => {
    const response = await fetch(`${baseUrl}/books/${id}`)
    return await response.json();
}

const fetchBooks = async () => {
    const response = await fetch(`${baseUrl}/books`)
    return await response.json();
}

export {fetchBook, fetchBooks}
