// import {z} from "zod"

// export const env = z.object({
//     PORT: z.coerce.number().default(3000),
//     MONGODB_URI : z.string(),
//     MONGODB_DATABASE_NAME : z.string(),
// }).parse(process.)

import {z} from "zod"

export const env = z.object({
    PORT: 3000,
    DATABASE_HOST: "localhost",
    DATABASE_USER :"ritik",
    DATABASE_PASSWORD: "argusadmin",
    DATABASE_NAME: 'url_shortener_mysql',
})