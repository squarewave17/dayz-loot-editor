import { useStorage } from "@vueuse/core";
export default function localStore() {
  let localState;
  const saveLocal = (data) => {
    localState = useStorage("dayz-loot-session", {});
    localState.value = data;
  };

  const getLocal = () => {
    return localState.value;
  };

  const hasData = () => {
    return localState.value !== undefined || {};
  };
  console.log(localState.value);
  return {
    saveLocal,
    getLocal,
    hasData,
  };
}
