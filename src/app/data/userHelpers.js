
export function fetchUsers() {
    return fetch("/users").then(response => response.json())
}
