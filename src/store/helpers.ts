import { LoadingInterface } from "store/Repositories/Repositories.types";

export const fetchData = async (url: string, useCache?: boolean) => {
  const fetchedData = await fetch(url, {
    cache: useCache ? "force-cache" : "no-cache",
    headers: {
      Authorization: `token ${process.env.REACT_APP_API_TOKEN}`,
    },
  });
  return await fetchedData.json();
};

export const handleErrorState = <F extends LoadingInterface>(
  state: F,
  action: any
) => ({
  ...state,
  error: action.error,
});

export const handleLoadingState = <F extends LoadingInterface>(state: F) => ({
  ...state,
  loading: true,
  loaded: false,
});

export const handleStateChange = <F extends LoadingInterface>(
  state: F,
  customArgs?: { data: any; key: keyof F }[]
): F => {
  let stateChanges =
    customArgs?.map((customArg) => ({
      [customArg.key]: customArg.data,
    })) || undefined;
  if (stateChanges?.length) {
    stateChanges = Object.assign({}, ...stateChanges);
  }
  return {
    ...state,
    ...(stateChanges && stateChanges),
    loading: false,
    loaded: true,
  };
};
