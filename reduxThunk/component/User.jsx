import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
const initUser = {
  id: undefined,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

export default function User() {
  const params = useParams();
  console.log("params", params);
  const { id } = params;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
  }, [id]);
  if (loading) {
    return <div></div>;
  }
  const { name, email, username, website } = user;
  return (
    <div>
      <h2>Each User React Router DOM</h2>
      <h3>Name: {name}</h3>
      <h4>username: {username}</h4>
      <h4>email: {email}</h4>
      <h4>website: {website}</h4>
    </div>
  );
}
