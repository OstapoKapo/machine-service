
export interface fullUser {
    name: String,
    email: String,
    password: String,
    profileImg: String,
    cars: Car[],
    _id?: String,
    __v?: Number
}

export interface Car {
    _id?: String,
    name: String,
    mileage: Number,
    averageSpeed: Number,
    history: History[],
    carImg: String,
    filter: {
        lastChange: String,
        nextChange: String
    },
    oil: {
        lastChange: String,
        nextChange: String
    }
}

export interface History {
    description: String,
    date: String
}
