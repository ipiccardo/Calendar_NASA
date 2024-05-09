import { Pictures } from "./types";

const API_KEY = process.env.NASA_API_KEY;
const APOD_URL = "https://api.nasa.gov/planetary/apod";

const pictures: any[] = [];

const api = {
  list: async (startDate: string, endDate: string): Promise<any> => {
    const data = await fetch(
      `${APOD_URL}?api_key=${API_KEY}&thumbs=true&start_date=${startDate}&end_date=${endDate}`
    )
      .then((res) => res.json())
      .then((datos) => {
        return datos;
      });
    pictures.push({...data});
    return data;
  },
  fetch: async (date: any["date"]): Promise<any> => {
    if (pictures.length) {
      const pic = pictures?.find((picture: any) => picture.date === date);
      if (!pic) {
        const data = await fetch(
          `${APOD_URL}?api_key=${API_KEY}&thumbs=true&date=${date}`
        )
          .then((res) => res.json())
          .then((datos) => {
            return datos;
          });
        return data;
      }
      return pic;
    } else {
      const data = await fetch(
        `${APOD_URL}?api_key=${API_KEY}&thumbs=true&date=${date}`
      )
        .then((res) => res.json())
        .then((datos) => {
          return datos;
        });
      return data;
    }
  },
  //   search: async (query: string): Promise<Pictures[]> => {
  //     const results = await api
  //       .list()
  //       .then((restos) =>
  //         restos.filter((res) =>
  //           res.title.toLowerCase().includes(query?.toLowerCase())
  //         )
  //       );

  //     // Los retornamos
  //     return results;
  //   },
};

export default api;
