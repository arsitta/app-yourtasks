import { userDefault } from "./userDefault";

export const dataDefault = {
    logged: {
        state: false,
        user: 0
    },
    database: {
        user1: {
            created: true,
            config: {
                name: "Pepe",
                darkmode: false,
                language: "ESP",
            },
            tasks: [
                { desc: "nada", done: false, important: false },
                { desc: "nada", done: false, important: false }
            ]
        },
        user2: { ...userDefault },
        user3: { ...userDefault },
    }
}