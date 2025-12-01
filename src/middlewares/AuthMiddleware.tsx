import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { useAppStore } from "@/stores/app";
import LazyLoading from "@/components/LazyLoading";
import { router } from "@/router";

const AuthMiddleware = () => {
  const [loading, setLoading] = useState(true);
  const { isLogin, onLogin } = useAppStore(state => state);
  useEffect(() => {
    console.log("执行 AuthMiddleware");
    setLoading(true);
    setTimeout(() => {
      // 随机返回 0 或 1
      const authed = isLogin;
      if (authed) {
        console.log("鉴权通过 AuthMiddleware");
        onLogin(true);
        setLoading(false);
      } else {
        console.log("跳转登录页 AuthMiddleware");
        // 非管理员，跳转到登录页
        router.navigate("/login");
      }
    }, 1000);
  }, [onLogin, isLogin]);

  return !loading && isLogin ? <Outlet /> : <LazyLoading />;
};

export default AuthMiddleware;
