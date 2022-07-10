const fetchLogin=() => fetch("/data/login/users.json")
    .then((response) => response.json());

const fetchUser=(id:number) => fetch(`/data/login/user_${id}.json`)
    .then((response) => response.json());

export const login=async () =>{
    const loginResponse = await fetchLogin();
    return await fetchUser(loginResponse.id);
}
