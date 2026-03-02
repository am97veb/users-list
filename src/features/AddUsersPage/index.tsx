import { useState } from "react";
import { type User } from "../UsersListPage/types";

export const AddUsersPage = () => {
  const [userData, setUserData] = useState<Omit<User, "id">>({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: {
      city: "",
      street: "",
      zipcode: "",
      suite: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    website: "",
  });

  return (
    <form>
      <fieldset>
        <legend>basic info</legend>
        <p>
          <label>
            name*: <input name="name" type="text" required />
          </label>
        </p>
        <p>
          <label>
            email*: <input name="email" type="email" required />
          </label>
        </p>
        <p>
          <label>
            phone*: <input name="phone" type="number" required />
          </label>
        </p>
        <p>
          <label>
            website: <input name="website" />
          </label>
        </p>
      </fieldset>

      <fieldset>
        <legend>address</legend>
        <p>
          <label>
            street*: <input name="address.street" required />
          </label>
        </p>
        <p>
          <label>
            zip code*: <input name="address.zipcode" type="number" required />
          </label>
        </p>
        <p>
          <label>
            city*: <input name="address.city" type="text" required />
          </label>
        </p>
        <p>
          <label>
            suite*: <input name="address.suite" type="text" required />
          </label>
        </p>
      </fieldset>
      <fieldset>
        <legend>company</legend>
        <p>
          <label>
            name: <input name="company.name" />
          </label>
        </p>
        <p>
          <label>
            catchPhrase: <input name="company.catchPhrase" />
          </label>
        </p>
        <p>
          <label>
            bs: <input name="company.bs" />
          </label>
        </p>
      </fieldset>
      <p>* - required fields </p>
      <button>add to users list</button>
    </form>
  );
};
