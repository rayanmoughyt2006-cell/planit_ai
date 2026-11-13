 export async function getdata(){
    let response = await fetch("./data/data.json")
    let data = await response.json()
    
    return data
}