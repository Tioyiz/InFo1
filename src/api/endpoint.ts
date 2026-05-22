const baseUrl = "https://api.openf1.org/v1";

export async function getData(url: string) {
  try {
    const res = await fetch(`${baseUrl}/${url}`);
    if (!res.ok) throw new Error("error en la peticion");
    return await res.json();
  } catch (error) {
    throw new Error("error en la peticion");
  }
}
