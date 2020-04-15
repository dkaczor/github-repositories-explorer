export const fetchData = async (url: string) => {
  const fetchedData = await fetch(url, {
    headers: {
      Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
    },
  });
  return await fetchedData.json();
};
