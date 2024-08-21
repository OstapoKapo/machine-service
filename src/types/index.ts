
export interface fullUser {
    name: String,
    email: String,
    password: String,
    profileImg: String,
    cars: Car[],
    __id: String,
    _v: number
}

export interface Car {
    _id?: String,
    history: History[]        
    year: Number,
    model: String,
    brand: String,
    carImg: String,
    lubricants: {
        lastChange: String,
        nextChange: String
    },
    filter: {
        lastChange: String,
        nextChange: String
    }
}

export interface History {
    description: String,
    date: String
}
