const Weekend = () => {
    Friday = 1,
    Saturday = getDate('TGIF'),
    Sunday = Saturday * 40
}

function getDate(day) {
    if (day === 'TGIF') {
        return 3;
    }
}

console.log(Weekend.Saturday);
console.log(Weekend.Sunday);

interface User {
    name: string;
    id: Number;
    details?: {
        age: number;
        email: string;
    }
}

function getUserAge(id: number): number {
    const user: User = getUser(id);

    if(user && user.details) {
        return user.details.age;
    } else {
        return 0;
    }
}

