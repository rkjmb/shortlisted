export const getCandidates = async () => {
    const response = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
    const data = await response.json();
    return data;
}