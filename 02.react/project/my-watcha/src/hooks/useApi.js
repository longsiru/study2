import { useEffect } from "react";

const useApi = (apiFunc, id = null) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await apiFunc(id);
      } catch (e) {
        console.log(e); // 에러 조회
      }
    };
    fn();
  }, [apiFunc, id]);
};

export default useApi;
