import fs from 'fs';


export const readUsers = () => {
    return JSON.parse(fs.readFileSync('/home/asadulloh/Desktop/N14-29-dars/databases/products.json', 'utf-8'))
} 

export const writeUsers = (users) => {
    fs.writeFileSync('/home/asadulloh/Desktop/N14-29-dars/databases/products.json', JSON.stringify(users))
}