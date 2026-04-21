import type { User } from "../types";

export const getFormFields = (userData: Omit<User, "id">) => ({
  "basic info": [
    {
      signature: "name",
      name: "name",
      type: "text",
      required: true,
      value: userData.name,
    },
    {
      signature: "email",
      name: "email",
      type: "email",
      required: true,
      value: userData.email,
    },
    {
      signature: "phone",
      name: "phone",
      type: "number",
      required: true,
      value: userData.phone,
    },
    {
      signature: "website",
      name: "website",
      type: "text",
      required: false,
      value: userData.website,
    },
  ],
  address: [
    {
      signature: "street",
      name: "address.street",
      type: "text",
      required: true,
      value: userData.address.street,
    },
    {
      signature: "suite",
      name: "address.suite",
      type: "text",
      required: false,
      value: userData.address.suite,
    },
    {
      signature: "zip code",
      name: "address.zipcode",
      type: "text",
      required: true,
      value: userData.address.zipcode,
    },
    {
      signature: "city",
      name: "address.city",
      type: "text",
      required: true,
      value: userData.address.city,
    },
  ],
  company: [
    {
      signature: "name",
      name: "company.name",
      type: "text",
      required: false,
      value: userData.company?.name,
    },
    {
      signature: "catch phrase",
      name: "company.catchPhrase",
      required: false,
      type: "text",
      value: userData.company?.catchPhrase,
    },
  ],
});
