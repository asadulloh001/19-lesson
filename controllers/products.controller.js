import { readUsers, writeUsers } from "../service/readWrite.js"

export const createProducst = (req, res, next) => {
  try {
      const users = readUsers()
      users.push({id: Math.floor(Math.random()*1000 + 1), ...req.body})
      writeUsers(users)
      res.status(200).send({success: true})
  } catch (error) {
    next(error)
  }
}

export const getAllProducsts = (req, res, next) => {
  try {
    res.status(200).send(readUsers())
  } catch (error) {
    next(error)
  }
}

export const getByIdProducst = (req, res, next) => {
  try {
    const users = readUsers()
    const match = users.find(user => user.id == Number(req.params.id))
    if(match) 
      res.status(200).send({success: true, user: match})
    else 
      throw new Error('User not found');
      
  } catch (error) {
    next(error)
  }
}


export const updateByIdProducst = (req, res, next) => {
  try {
    const users = readUsers()
    const match = users.findIndex(user => user.id == req.params.id)
    if(match !== -1) {
      users[match] = {...users[match], ...req.body}
      writeUsers(users)
      res.status(200).send({success: true, user: users[match]})
    }
    else 
      throw new Error('User not found');
      
  } catch (error) {
    next(error)
  }
}


export const deleteByIdProducst = (req, res, next) => {
  try {
    const users = readUsers()
    const filtered = users.filter(user => user.id != req.params.id)
    if(filtered.length !== users.length) {
      writeUsers(filtered)
      res.status(200).send({success: true})
    }
    else 
      throw new Error('User not found');
      
  } catch (error) {
    next(error)
  }
}