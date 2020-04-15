export const fetchData = async (url: string): Promise<any> => {
  const fetchedData = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
    },
  });
  return await fetchedData.json();
};
