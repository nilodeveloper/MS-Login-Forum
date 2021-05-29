import express from 'express';
import idIs25 from './idIs25.middleware';
import idIsCharacter from './idIsCharacterB.middleware'

const userMiddlewares = express()

userMiddlewares.use(
    idIsCharacter,
    idIs25
)

export default userMiddlewares;
