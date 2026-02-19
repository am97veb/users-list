import type { User } from "../types";

export const mapUserData = (userData: User) =>( {
"name": `${userData.name}`,
"username": `${userData.username}`,
"email": `${userData.email}`,
"phone": `${userData.phone}`,
"address": ` ${userData.address.street}, ${userData.address.suite} \n ${userData.address.zipcode} ${userData.address.city},`,
"website": `${userData.website}`,
"company": `${userData.company?.name}`,
} )