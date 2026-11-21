export async function getdata() {
    let response = await fetch("./data/data.json")
    let data = await response.json()

    return data
}


export async function sendata(prompt) {
    const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'x-goog-api-key': ''
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: prompt
                }]
            }]
        })
    })
    const data = await res.json();
    if (!res.ok) {
        console.log(data.error);
        return null;
    }
    return data.candidates[0].content.parts[0].text;
}   