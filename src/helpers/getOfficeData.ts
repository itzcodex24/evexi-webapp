export async function getOfficeData(token: string) {
  const headers = new Headers();
  const bearer = `Bearer ${token}`;
  headers.append("Authorization", bearer);
  const options = {
    method: "GET",
    headers: headers,
  };
  const url =
    "https://graph.microsoft.com/v1.0/me/events?$select=subject,start,end,location";
  const res = fetch(url, options).then(async (res) => await res.json());

  return await res;
}
