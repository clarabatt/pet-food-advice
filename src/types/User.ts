export default interface User {
    "uuid": String,
    "first_name": String,
    "last_name": String,
    "full_name": String,
    "email": String,
    "pets": Pet[],
}

interface Pet {
        "uuid": String,
        "name": String,
        "species": "DOG" | "CAT" | "BIRD" | "RODENT" | "REPTILE" | "OTHER",
        "breed": String,
        "color": String,
        "color_2": String | null,
        "gender": "FEMALE" | "MALE" | null,
        "spayed_neutered": boolean,
        "has_photo": boolean,
        "age": Number,
        "weight": {
            "value": Number,
            "is_metric": Number,
        },
        "is_removed": boolean,
}